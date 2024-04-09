const selectDishModule = state => state.dish;

export const selectDishIds = state => selectDishModule(state).ids;
export const selectDishById = (state, dishId) => selectDishModule(state).entities[dishId];