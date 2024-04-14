import { useCurrentTheme } from "../../contexts/ThemeContext";
import { Footer } from "./component";

export const FooterContainer = (props) => {
    const {theme} = useCurrentTheme();
    return <Footer {...props} theme={theme} />
};