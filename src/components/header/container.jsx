import { useCurrentTheme } from "../../contexts/ThemeContext";
import { Header } from "./component"

export const HeaderContainer = (props) => {
    const {theme} = useCurrentTheme();

    return <Header {...props} theme={theme}/>
};