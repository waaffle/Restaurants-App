import React, { useMemo, useState } from "react"

export const ThemeContext = React.createContext("light");

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={useMemo(() => ({theme, setTheme}), [theme])}>
            {children}
        </ThemeContext.Provider>
    )
}
