import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/getUsers";

const userEntityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: "user",
    initialState: userEntityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled,
          (state, { payload: users }) => {
            userEntityAdapter.setAll(state, users)
    })
    }
})