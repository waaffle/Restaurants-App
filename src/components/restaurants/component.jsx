import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { getStorageRestaurantIndex, setStorageRestaurantIndex } from '../../utils/storage';
import { Restaurant } from "../restaurant/component";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "currentRestaurantIndex";

export const Restaurants = () => {

    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => 
    Number(getStorageRestaurantIndex(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY))
);
const activeRestaurant = restaurants[currentRestaurantIndex];

return <div>
    <RestaurantTabs 
                restaurants={restaurants}
                currentRestaurantIndex={currentRestaurantIndex}
                onTabClick={(index) => {
                    setCurrentRestaurantIndex(index);
                    setStorageRestaurantIndex(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
                }}
                />
    {activeRestaurant ? (<Restaurant restaurant={activeRestaurant}/>) : (<span>Select Restaurant</span>) }
</div>
};