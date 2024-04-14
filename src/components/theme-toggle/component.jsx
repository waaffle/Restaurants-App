import { ThemeContext } from "../../contexts/ThemeContext";
import { ButtonContainer } from "../button/container";

export const ThemeToggle = ({ headerTheme, toggleTheme, theme}) => {
    
    return (
    <ThemeContext.Provider value = {headerTheme}>
        <ButtonContainer onClick={toggleTheme}>
                {theme}
        </ButtonContainer>
    </ThemeContext.Provider>
)};