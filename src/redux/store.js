import { configureStore } from "@reduxjs/toolkit";
import allUsersSlice from "./reducers/users/allUsers.reducer"

const store = configureStore({
    reducer : {
        users : allUsersSlice
    }
})

export default store;
