import { selectRestaurantIds } from "../selectors";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants",
    async (_, { rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/restaurants");
        const result = await response.json();

        if (result.length === 0){
            rejectWithValue("no data");
        }
        return result;
    },
    {
        condition: (_, { getState }) => {
            !selectRestaurantIds(getState())?.length;
        }
    }
)