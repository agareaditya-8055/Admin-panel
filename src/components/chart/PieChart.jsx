import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import usersDataFile from "./data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    totalEnrolledInMockDrive: 0,
    totalPassedMockDrive: 0,
    totalCompletedProjects: 0,
  });

  useEffect(() => {
    const usersData = usersDataFile;
    setMetrics(calculateMetrics(usersData));
  }, []);

  const calculateMetrics = (data) => {
    const totalUsers = data.length;
    const totalEnrolledInMockDrive = data.filter(
      (user) => user.enrolledMockDrives.length > 0
    ).length;
    const totalPassedMockDrive = data.filter(
      (user) => user.mockDriveScore >= 70
    ).length;
    const totalCompletedProjects = data.filter(
      (user) => user.projectsSubmitted.length > 0
    ).length;

    return {
      totalUsers,
      totalEnrolledInMockDrive,
      totalPassedMockDrive,
      totalCompletedProjects,
    };
  };

  const pieData = {
    labels: [
      "Enrolled in Mock Drive",
      "Passed Mock Drive",
      "Completed Projects",
    ],
    datasets: [
      {
        label: "User Participation",
        data: [
          metrics.totalEnrolledInMockDrive,
          metrics.totalPassedMockDrive,
          metrics.totalCompletedProjects,
        ],
        backgroundColor: ["#4f46e5", "#22c55e", "#f97316"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        
      },
       labels: {
          boxWidth: 20,
          padding: 15,
        },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value} users`;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center space-x-2  p-4 bg-white rounded-md">
      
      <div className="flex-shrink-0 w-[280px]">
        {metrics.totalUsers > 0 ? (
          <Pie className="w-5" data={pieData} options={options} />
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>

      
      <div className="flex-shrink-0 w-[280px]">
        {metrics.totalUsers > 0 ? (
          <Pie className="w-5" data={pieData} options={options} />
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
};

export default PieChart;