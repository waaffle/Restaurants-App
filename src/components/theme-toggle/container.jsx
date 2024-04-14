import { useMemo } from "react";
import { useCurrentTheme } from "../../contexts/ThemeContext";
import { ThemeToggle } from "./component";

export const ThemeToggleContainer = () => {
    const {theme, toggleTheme} = useCurrentTheme();
    
    const headerTheme = useMemo(() => ({theme: "light"}), []);
    
    return <ThemeToggle headerTheme={headerTheme} toggleTheme={toggleTheme} theme={theme}/>
};