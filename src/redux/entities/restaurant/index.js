import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/getRestaurants";

const restaurantEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: restaurantEntityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.fulfilled,
          (state, { payload: restaurants }) => {
            restaurantEntityAdapter.setAll(state, restaurants)
    })
    }
})
