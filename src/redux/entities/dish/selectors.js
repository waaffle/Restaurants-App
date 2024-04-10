import { selectRestaurantById } from "../restaurant/selectors";

const selectDishModule = state => state.dish;

export const selectDishIds = state => selectDishModule(state).ids;
export const selectDishIdsByRestaurantId = (state, restaurantId) => selectRestaurantById(state, restaurantId).menu;
export const selectDishById = (state, dishId) => selectDishModule(state).entities[dishId];