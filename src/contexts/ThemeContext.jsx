import React, { useState } from "react"

export const ThemeContext = React.createContext("light");

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
