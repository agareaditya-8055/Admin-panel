import React, { useState } from "react";
import PieChart from "../../components/chart/PieChart";
import ReviewCard from "../../components/review/ReviewCard";
import LineChart from "../../components/chart/LineChart";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaDownload,
  FaGraduationCap,
  FaUser,
  FaUserSecret,
} from "react-icons/fa";
import { BsFileCheck } from "react-icons/bs";

import {
  BiBell,
  BiDotsVertical,
  BiHelpCircle,
  BiStar,
  BiUser,
  BiUserCheck,
} from "react-icons/bi";
import { SiTarget } from "react-icons/si";
import ReviewSection from "../../components/review/ReviewSection";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Quiz");
  const [selectedOption2, setSelectedOption2] = useState("Quiz");
  const [activityFilter, setActivityFilter] = useState("All");
  const recentActivity = [
    { id: 1, action: "John Doe completed the test", time: "2 minutes ago" },
    {
      id: 2,
      action: "Jane Smith enrolled in a new course",
      time: "10 minutes ago",
    },
    { id: 3, action: "Mike Johnson passed the final exam", time: "1 hour ago" },
    { id: 4, action: "Sarah Williams started a new test", time: "2 hours ago" },
  ];
 
  const filteredActivities = recentActivity.filter((activity) => {
    if (activityFilter === "All") return true; // Show all activities
    if (activityFilter === "Completed" && activity.action.includes("completed"))
      return true;
    if (activityFilter === "Enrolled" && activity.action.includes("enrolled"))
      return true;
    return false; // Exclude others
  });
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between mx-auto  sm:px-6 lg:px-8 items-center py-4 ">
        <h1 className="text-xl font-semibold text-gray-600">Dashboard</h1>
        <button className="flex items-center  text-xs font-semibold bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 ">
          <FaDownload className="mr-2" />
          Generate Report
        </button>
      </div>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <div className="bg-white border rounded-md">
              <div className="px-4 py-4">
                <div className="flex gap-1  items-center justify-between">
                  <h2 className="text-sm flex items-center font-medium text-gray-700">
                    Total Users
                  </h2>
                  <div className="cursor-pointer">
                    <BiDotsVertical />
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-semibold">110</p>
              </div>
            </div>
            <div className="bg-white border rounded-md">
              <div className="px-4 py-4">
                <div className="flex gap-1  items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-700">
                    Total Mockdrive
                  </h2>
                  <div className="cursor-pointer">
                    <BiDotsVertical />
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-semibold">110</p>
              </div>
            </div>
            <div className="bg-white border rounded-md">
              <div className="px-4 py-4">
                <div className="flex gap-1  items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-700">
                    Total Enrollment
                  </h2>
                  <div className="cursor-pointer">
                    <BiDotsVertical />
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-semibold">110</p>
              </div>
            </div>
            <div className="bg-white border rounded-md">
              <div className="px-4 py-4">
                <div className="flex gap-1  items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-700">
                    Users Enrollment
                  </h2>
                  <div className="cursor-pointer">
                    <BiDotsVertical />
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-semibold">110</p>
              </div>
            </div>
            <div className="bg-white border rounded-md">
              <div className="px-4 py-4">
                <div className="flex gap-1  items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-700">
                    Earnings Overview
                  </h2>
                  <div className="cursor-pointer">
                    <BiDotsVertical />
                  </div>
                </div>
                <p className="text-gray-600 text-xl font-semibold">110</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border rounded-md">
              <div className="flex p-3 border-b  items-center justify-between">
                <h2 className="text-sm font-medium text-gray-700">
                  Earnings Overview
                </h2>
                <div className="relative inline-block">
                  <select
                    value={selectedOption2}
                    onChange={(e) => setSelectedOption2(e.target.value)}
                    className="block text-xs font-medium w-30 px-3 py-1 border border-gray-400 rounded-full focus:outline-none focus:ring focus:ring-gray-50"
                  >
                    <option className="text-xs font-medium" value="Quiz">
                      Quiz
                    </option>
                    <option className="text-xs font-medium" value="Course">
                      Course
                    </option>
                    <option className="text-xs font-medium" value="Mock Drive">
                      Mock Drive
                    </option>
                  </select>
                </div>
              </div>
              <div className="h-80">
                <LineChart />
              </div>
            </div>

            <div className="bg-white border rounded-md">
              <div className="flex p-3 border-b  items-center justify-between">
                <h2 className="text-sm font-medium text-gray-700">
                  Earnings Overview
                </h2>

                <div className="relative inline-block">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="block text-xs font-medium w-30 px-3 py-1 border border-gray-400 rounded-full focus:outline-none focus:ring focus:ring-gray-50"
                  >
                    <option className="text-xs font-medium" value="Quiz">
                      Quiz
                    </option>
                    <option className="text-xs font-medium" value="Course">
                      Course
                    </option>
                    <option className="text-xs font-medium" value="Mock Drive">
                      Mock Drive
                    </option>
                  </select>
                </div>
              </div>
              <div className="h-80">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="bg-white border rounded-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-600 mb-2 ">
                  Recent Activity
                </h2>

                {/* Filter Dropdown */}
                <div className="relative inline-block">
                  <select
                    value={activityFilter}
                    onChange={(e) => setActivityFilter(e.target.value)}
                    className="block text-xs font-medium w-30 px-3 py-1 border border-gray-400 rounded-full focus:outline-none focus:ring focus:ring-gray-50"
                  >
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Enrolled">Enrolled</option>
                    {/* Add more filter options as needed */}
                  </select>
                </div>
              </div>

              <ul className="divide-y border-t divide-gray-200">
                {filteredActivities.length > 0 ? (
                  filteredActivities.map((activity) => (
                    <li key={activity.id} className="py-4">
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm text-gray-700 font-medium">
                              {activity.action}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No activities found.
                  </p>
                )}
              </ul>
            </div>
          </div>
          <ReviewSection/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;