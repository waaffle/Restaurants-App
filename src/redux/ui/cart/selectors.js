import { createSelector } from "@reduxjs/toolkit";
import { selectDishById } from "../../entities/dish/selectors";

const selectCartModule = state => state.cart;

export const selectAmountDishById = (state, dishId) => selectCartModule(state)[dishId] || 0;

export const selectCartDishIds = createSelector([selectCartModule], (cart) => {
    return Object.keys(cart);
})

export const selectCartTotal = (state) => {
    const dishIds = selectCartDishIds(state);
    if (!dishIds?.length) return null;
    
    return dishIds.reduce((acc, dishId) => {
        const dish = selectDishById(state, dishId);
        const amount = selectAmountDishById(state, dishId);
        acc += dish?.price * amount || 0;
        return acc;
    }, 0);
};