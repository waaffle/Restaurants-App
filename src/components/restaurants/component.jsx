import { useState } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { getStorageRestaurantId, setStorageRestaurantId } from '../../utils/storage';
import { Restaurant } from "../restaurant/component";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "currentRestaurantId";

export const Restaurants = () => {

    const [currentRestaurantId, setCurrentRestaurantId] = useState(() => 
    getStorageRestaurantId(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)
);

return <div>
    <RestaurantTabs 
                currentRestaurantId={currentRestaurantId}
                onTabClick={(currentRestaurantId) => {
                    setCurrentRestaurantId(currentRestaurantId);
                    setStorageRestaurantId(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, currentRestaurantId)
                }}
                />
    {currentRestaurantId ? (<Restaurant restaurantId={currentRestaurantId}/>) : (<span>Select Restaurant</span>) }
</div>
};