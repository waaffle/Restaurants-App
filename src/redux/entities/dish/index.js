import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishIdsByRestaurantId } from "./thunks/getDishIdsByRestaurantId";

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dish",
    initialState: dishEntityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getDishIdsByRestaurantId.fulfilled,
            (state, {payload: dishIds}) => dishEntityAdapter.upsertMany(state, dishIds)
        )
    }
})