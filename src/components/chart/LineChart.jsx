import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, 
  Tooltip,
  Legend,
} from "chart.js";
import usersDataFile from "./data.json"; 


ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [userScores, setUserScores] = useState([]);

  useEffect(() => {
    
    const usersData = usersDataFile;
    const scoresData = calculateScoresData(usersData);
    setUserScores(scoresData);
  }, []);

  
  const calculateScoresData = (data) => {
    return data.map((user) => ({
      name: user.name,
      score: user.mockDriveScore, 
      date: new Date(user.enrollmentDate).toLocaleDateString(), 
    }));
  };

  
  const lineData = {
    labels: userScores.map((user) => user.date), 
    datasets: [
      {
        label: "Mock Drive Scores",
        data: userScores.map((user) => user.score), 
        fill: false,
        borderColor: "#4f46e5",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category", 
        title: {
          display: true,
          text: "Enrollment Date",
        },
      },
      y: {
        type: "linear", 
        title: {
          display: true,
          text: "Scores",
        },
        min: 0,
        max: 100, 
      },
    },
  };

  return (
    <div className="max-w-lg mx-auto my-3 rounded-lg">
      {userScores.length > 0 ? (
        <Line data={lineData} options={options} />
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default LineChart;