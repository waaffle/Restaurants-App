import React, { useMemo, useState } from "react";

export const UserContext = React.createContext("notAuthorized");

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState("notAuthorized");


    return <UserContext.Provider value={ useMemo(() => ({user, setUser}), [user]) }>
        {children}
    </UserContext.Provider>
};