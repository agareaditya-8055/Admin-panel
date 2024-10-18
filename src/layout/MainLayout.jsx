import React from 'react'
import { FaQuestionCircle, FaUsers } from 'react-icons/fa';
import { TbUserScreen } from 'react-icons/tb';
import { NavLink, Outlet } from 'react-router-dom'

export default function MainLayout() {

    const navItems = [
        { name: "Dashboard", link: "/dashboard", icon: <FaUsers className="w-4 h-4" /> },
        { name: "Candidates", link: "/users", icon: <FaUsers className="w-4 h-4" /> },
        { name: "Quizzes", link: "/quizzes", icon: <FaQuestionCircle className="w-4 h-4" /> },
        { name: "Interview", link: "/interviews", icon: <TbUserScreen className="w-4 h-4" /> },
      ];

    return (
        <main className='flex'>
            <aside className='w-72 h-screen bg-white border-r sticky top-0 left-0'>
                <nav className="flex lg:flex-col">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium border-b border-gray-300  transition-colors duration-150 ease-in-out ${
                    isActive
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  } flex-1 lg:flex-none justify-center lg:justify-start`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span className="hidden lg:inline ml-3">{item.name}</span>
              </NavLink>
            ))}
          </nav>
            </aside>
            <main className='w-full min-h-screen bg-gray-100 p-5 overflow-x-hidden text-justify'>
                <Outlet />
            </main>
        </main>
    )
}
