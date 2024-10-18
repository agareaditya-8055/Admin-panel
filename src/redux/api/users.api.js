import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllUsers = createAsyncThunk('users/fetchAllUsers', async () => {
    try {
        const url = `${import.meta.env.VITE_HANDLE_BACKEND}/user/all`;
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI5Iiwicm9sZV9pZCI6IjEiLCJpYXQiOjE3MjkxNDgwNTQsImV4cCI6MTczMTc0MDA1NH0.t-AacuimaUyYYPcCMUvIiIMvrZ7HiesndmsELf1jqw4";
        const response = await axios.get(url, {
            headers: {
                authorization: `Bearer ${token}`
            } 
        });
        const data = response.data;
        
        return data.message || [];
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Error during request');
        } else if (error.request) {
            throw new Error('Server is down or no response received');
        } else {
            throw new Error(error.message);
        }
    }
});