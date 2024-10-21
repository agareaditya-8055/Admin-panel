import React, { useState } from 'react';
import { FaUsers, FaBars, FaTimes, FaProjectDiagram, FaBook, FaCar, FaGoogleDrive } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: MdDashboard },
    { name: 'Users', path: '/users', icon: FaUsers },
    { name: 'Mock Drives', path: '/mock-drives', icon: FaGoogleDrive },
    { name: 'Projects', path: '/projects', icon: FaProjectDiagram },
    { name: 'Preparation', path: '/preparation', icon: FaBook },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transition duration-300 ease-in-out transform md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
          <span className="text-xl font-semibold text-white">Admin Panel</span>
          <button
            className="p-1 text-gray-400 rounded-md md:hidden hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-5">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center w-full px-4 py-2 text-sm font-medium ${
                  isActive
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <button
            className="p-1 text-gray-400 rounded-md md:hidden hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-500">Welcome, Admin</span>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container px-4 py-8 mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
