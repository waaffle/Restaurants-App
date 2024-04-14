import { REQUEST_STATUSES } from "./constants";

const selectRequestModule = state => state.requestStatus;

export const selectRequestStatus = (state, requestId) => selectRequestModule(state)[requestId]?.status || REQUEST_STATUSES.idle;

export const selectIsRequestIdle = (state, requestId) => {
    return selectRequestStatus(state, requestId) === REQUEST_STATUSES.idle;
}
export const selectIsRequestPending = (state, requestId) => {
    return selectRequestStatus(state, requestId) === REQUEST_STATUSES.pending;
}
export const selectIsRequestFulfilled = (state, requestId) => {
    return selectRequestStatus(state, requestId) === REQUEST_STATUSES.fulfilled;
}
export const selectIsRequestRejected = (state, requestId) => {
    return selectRequestStatus(state, requestId) === REQUEST_STATUSES.rejected;
}
export const selectRequestError = (state, requestId) => {
    return selectRequestModule(state)[requestId]?.error;
}