import { createSlice } from "@reduxjs/toolkit"
import { fetchAllUsers } from "../../api/users.api";

const initialState = {
    status: "idle",
    loading: false,
    data: [],
    error: null
}

const allUsersSlice = createSlice({
    name : "allUsers",
    initialState,
    reducers: {
        resetState : (state) => state = initialState
    },
    extraReducers: (builder) => {
        builder
            // ! fetch preparation answer ---------------------------------------
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
                state.status = "loading";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                state.status = "success";
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.status = "failed";
            })
    }

})

export const { resetState } = allUsersSlice.actions;
export default allUsersSlice.reducer;