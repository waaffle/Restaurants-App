const selectUserModule = state => state.user;

export const selectUserIds = state => selectUserModule(state).ids;
export const selectUserById = (state, userId) => selectUserModule(state).entities[userId];