import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import User from './pages/user/User'
import Quiz from './pages/quiz/Quiz'
import InterviewSchedule from './pages/interview/InterviewSchedule'

export default function RouteConfig() {
    return (
        <Routes>
            <Route path='' element={<MainLayout />}>
                <Route index element={<h1>home</h1>} />
                <Route  path='dashboard' element={<h1>home</h1>} />
                <Route path='users' element={<User />} />
                <Route path='quizzes' element={<Quiz />} />
                <Route path='interviews' element={<InterviewSchedule />} />
                <Route path='*' element={<h1>not found</h1>} />
            </Route>
        </Routes>
    )
}


