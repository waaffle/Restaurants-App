/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button } from './components/button/component';
import { Layout } from './components/layout/component';
import { RestaurantTabs } from './components/restaurant-tabs/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants } from './constants/mock';
import { ThemeContext } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { getStorageRestaurantIndex, setStorageRestaurantIndex } from './utils/storage';

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "currentRestaurantIndex";

export const App = () => {

    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => 
        Number(getStorageRestaurantIndex(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY))
    );
    const activeRestaurant = restaurants[currentRestaurantIndex];

    const [theme, setTheme] = useState('dark');


    return (
        <ThemeContext.Provider value={theme}>
            <UserProvider>
                <Layout>
                    <ThemeContext.Provider value='light'>
                        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                {theme}
                        </Button>
                    </ThemeContext.Provider>
                    <RestaurantTabs 
                    restaurants={restaurants}
                    currentRestaurantIndex={currentRestaurantIndex}
                    onTabClick={(index) => {
                        setCurrentRestaurantIndex(index);
                        setStorageRestaurantIndex(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
                    }}
                    />
                    {activeRestaurant ? (<Restaurant restaurant={activeRestaurant}/>) : (<span>Select Restaurant</span>) }
                </Layout>
            </UserProvider>
        </ThemeContext.Provider>
    );
};
