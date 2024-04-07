/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useContext, useState } from "react";

export const UserContext = React.createContext(null);

export const useUser = (defaultUser = null) => {
    const [user, setUser] = useState(defaultUser);

    const logout = useCallback(() => {
        setUser(() => null);
    }, [])

    return {
        user,
        login: setUser,
        logout
    }
}

export function useCurrentUser(){
    return useContext(UserContext);
}