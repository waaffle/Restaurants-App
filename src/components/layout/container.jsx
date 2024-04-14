import { useCurrentTheme } from "../../contexts/ThemeContext";
import { Layout } from "./component";

export const LayoutContainer = ({children}) => {
    const {theme} = useCurrentTheme();
    return (
        <div>
            <Layout theme={theme}>
                {children}
            </Layout>
        </div>
)};