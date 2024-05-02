import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds, selectReviewIdsByRestaurantId } from "../selectors";

export const getReviewIdsByRestaurantId = createAsyncThunk(
    "review/getReviewIdsByRestaurantId",
    async (restaurantId) => {
        const response = await fetch(`http://176.109.103.144:3001/api/reviews?restaurantId=${restaurantId}`);
        return response.json();
    },
    {
        condition: (restaurantId, {getState}) => {
            const state = getState();

            const allReviewIds = selectReviewIds(state);
            const reviewIds = selectReviewIdsByRestaurantId(state, restaurantId);

            return reviewIds.some((id) => !allReviewIds.includes(id));
            
        }
    }
)