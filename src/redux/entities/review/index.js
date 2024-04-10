import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewIdsByRestaurantId } from "./thunks/getReviewIdsByRestaurantId";

const reviewEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: "review",
    initialState: reviewEntityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getReviewIdsByRestaurantId.fulfilled,
        (state, {payload: reviews}) => {
        reviewEntityAdapter.upsertMany(state, reviews)
})}
    
})