import { useRequest } from "../../hooks/useRequest";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/getRestaurants";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { Restaurants } from "./component";
import { RestaurantsSkeleton } from "./skeleton";


export const RestaurantsContainer = () => {
    const status = useRequest(getRestaurants)

    if ([REQUEST_STATUSES.pending, REQUEST_STATUSES.idle].includes(status)){
        return <RestaurantsSkeleton />
    } 
    return ( 
        <Restaurants />
    )
};