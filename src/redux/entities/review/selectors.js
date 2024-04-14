import { selectRestaurantById } from "../restaurant/selectors";

const selectReviewModule = state => state.review;

export const selectReviewIds = state => selectReviewModule(state).ids;
export const selectReviewIdsByRestaurantId = (state, restaurantId) => selectRestaurantById(state, restaurantId).reviews;
export const selectReviewById = (state, reviewId) => selectReviewModule(state).entities[reviewId];