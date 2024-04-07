import { useMemo } from "react";
import { ThemeContext, useCurrentTheme } from "../../contexts/ThemeContext";
import { Button } from "../button/component";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useCurrentTheme();
    
    const headerTheme = useMemo(() => ({theme: "light"}), []);
    return (
    <ThemeContext.Provider value = {headerTheme}>
        <Button onClick={toggleTheme}>
                {theme}
        </Button>
    </ThemeContext.Provider>
)};