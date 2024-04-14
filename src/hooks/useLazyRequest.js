import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export const useLazyRequest = (thunk, ...params) => {
    const [request, setRequest] = useState();
    const status = useSelector((state) => selectRequestStatus(state, request?.requestId));

    const dispatch = useDispatch();

    const refetchRequest = useCallback(() => {
        setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk, ...params]);

    return [status, refetchRequest];
};