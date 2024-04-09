const selectCartModule = state => state.cart;

export const selectCartDishIds = (state) => Object.keys(selectCartModule(state));
export const selectAmountDishById = (state, dishId) => selectCartModule(state)[dishId] || 0;