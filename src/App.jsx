/* eslint-disable react/jsx-key */
import { useMemo } from 'react';
import { LayoutContainer } from './components/layout/container';
import { RestaurantsContainer } from './components/restaurants/container';
import { ThemeContext, useTheme } from './contexts/ThemeContext';
import { UserContext, useUser } from './contexts/UserContext';



export const App = () => {

    const {theme, toggleTheme} = useTheme();
    const {user, login, logout} = useUser();

    const themeContextValue = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);
    const userContextValue = useMemo(() => ({user, login, logout}), [user, login, logout]);

    return (
        <ThemeContext.Provider value = { themeContextValue }>
            <UserContext.Provider value = { userContextValue }>
                <LayoutContainer>
                    <RestaurantsContainer />
                </LayoutContainer>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};
