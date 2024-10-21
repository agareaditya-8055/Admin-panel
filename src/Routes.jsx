import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import UserModule from './pages/Users/UserModule'
import ProjectsModule from './pages/projects/ProjectsModule'
import PreparationModule from './pages/preparation/PreparationModule'
import MockDriveModule from './pages/MockDrives/MockDriveModule'
import MainLayout from './layout/MainLayout'

export default function RouteConfig() {
    return (
        <Routes>
            <Route path='' element={<MainLayout />}>
                <Route index element={<h1>home</h1>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<UserModule />} />
                <Route path="/projects" element={<ProjectsModule />} />
                <Route path="/preparation" element={<PreparationModule />} />
                <Route path="/mock-drives" element={<MockDriveModule />} />
                <Route path='*' element={<h1>not found</h1>} />
            </Route>
        </Routes>
    )
}


