import { Outlet } from "react-router-dom";
import { useCurrentTheme } from "../../contexts/ThemeContext";
import { Layout } from "./component";

export const LayoutContainer = () => {
    const {theme} = useCurrentTheme();
    return (
        <div>
            <Layout theme={theme}>
                <Outlet />
            </Layout>
        </div>
)};