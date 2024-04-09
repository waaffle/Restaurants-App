const selectReviewModule = state => state.review;

export const selectReviewIds = state => selectReviewModule(state).ids;
export const selectReviewById = (state, reviewId) => selectReviewModule(state).entities[reviewId];