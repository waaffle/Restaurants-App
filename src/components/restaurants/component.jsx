import { useEffect, useState } from "react";
import { RestaurantTabs } from "../restaurant-tabs/component";
import { getStorageRestaurantId, setStorageRestaurantId } from '../../utils/storage';
import { Restaurant } from "../restaurant/component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/getRestaurants";

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "currentRestaurantId";

export const Restaurants = () => {

    const [currentRestaurantId, setCurrentRestaurantId] = useState(() => 
    getStorageRestaurantId(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
    },
    []);

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