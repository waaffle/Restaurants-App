import { selectRestaurantIds } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async (_, { rejectWithValue }) => {
        const response = await fetch("http://176.109.103.144:3001/api/restaurants");
        const result = await response.json();

        if (result.length === 0){
            rejectWithValue("no data");
        }
        return result;
    },
    {
        condition: ({forceReload = false} = {}, { getState }) => {
            forceReload || !selectRestaurantIds(getState())?.length;
        }
    }
)