/* eslint-disable react-refresh/only-export-components */
import React, { useCallback, useContext, useState } from "react";

export const ThemeContext = React.createContext("light");

export const useTheme = (defaultValue = "light") => {
    const [theme, setTheme] = useState(defaultValue);

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }, [])

    return {theme, toggleTheme};
}

export function useCurrentTheme(){
    return useContext(ThemeContext)
}