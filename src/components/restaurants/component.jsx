import { useState } from "react";
import { getStorageRestaurantId, setStorageRestaurantId } from "../../utils/storage";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "currentRestaurantId";

export const Restaurants = () => {

    const [currentRestaurantId, setCurrentRestaurantId] = useState(() => 
    getStorageRestaurantId(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY));

return <div>
    <RestaurantTabsContainer
    currentRestaurantId={currentRestaurantId}
    onTabClick={(currentRestaurantId) => {
        setCurrentRestaurantId(currentRestaurantId);
        setStorageRestaurantId(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, currentRestaurantId)
    }}/>
    {currentRestaurantId ? (<RestaurantContainer restaurantId={currentRestaurantId}/>) : (<span>Select Restaurant</span>) }
</div>
};