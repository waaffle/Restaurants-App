import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds, selectDishIdsByRestaurantId } from "../selectors";

export const getDishIdsByRestaurantId = createAsyncThunk(
    "dish/getDishIdsByRestaurantId",
    async (restaurantId) => {
        const response = await fetch(`http://176.109.103.144:3001/api/dishes?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, { getState }) => {
            const state = getState();
            const allDishIds = selectDishIds(state);
            const dishIds = selectDishIdsByRestaurantId(state, restaurantId);

            return dishIds.some((id) => !allDishIds.includes(id));
        }
    }
)