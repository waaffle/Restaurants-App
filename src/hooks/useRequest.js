import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";

export const useRequest = (thunk, ...params) => {
    const [request, setRequest] = useState();
    const status = useSelector((state) => selectRequestStatus(state, request?.requestId))
    const dispatch = useDispatch();

    useEffect(() => {
        const request = dispatch(thunk(...params));
        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        }
    },
    [dispatch, thunk, ...params]);

    return status;
};