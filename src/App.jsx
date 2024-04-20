/* eslint-disable react/jsx-key */
import { useMemo } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LayoutContainer } from './components/layout/container';
import { MenuContainer } from './components/menu/container';
import { RestaurantContainer } from './components/restaurant/container';
import { ReviewsContainer } from './components/reviews/container';
import { ThemeContext, useTheme } from './contexts/ThemeContext';
import { UserContext, useUser } from './contexts/UserContext';
import { DishPage } from './pages/dish/DishPage';
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';



export const App = () => {

    const {theme, toggleTheme} = useTheme();
    const {user, login, logout} = useUser();

    const themeContextValue = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);
    const userContextValue = useMemo(() => ({user, login, logout}), [user, login, logout]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LayoutContainer />,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: "/restaurants",
                    element: <RestaurantPage />,
                    children: [
                        {
                            path: ':restaurantId',
                            element: <RestaurantContainer />,
                            children: [
                                {
                                    path: '',
                                    element: <Navigate to="menu" replace/>,
                                },
                                {
                                    path: 'menu',
                                    element: <MenuContainer />
                                },
                                {
                                    path: 'reviews',
                                    element: <ReviewsContainer />
                                }
                            ]
                        }
                    ]
                },
                {
                    path: "/dish/:dishId",
                    element: <DishPage />
                }
        ]
        },
        
    ])

    return (
        <ThemeContext.Provider value = { themeContextValue }>
            <UserContext.Provider value = { userContextValue }>
                    <RouterProvider router={router} />
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};
