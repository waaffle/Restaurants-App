import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        incrementDish: (state, {payload: id}) => {
            const amountDish = state[id] || 0;
            state[id] = amountDish + 1;
            return state;
        },
        decrementDish: (state, {payload: id}) => {
            const amountDish = state[id] || 0;
            state[id] = amountDish - 1;
            if (state[id] <= 0) delete state[id];
            return state;
        }
    }
})

export const {incrementDish, decrementDish} = cartSlice.actions;