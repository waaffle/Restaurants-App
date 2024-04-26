import { useRequest } from "../../hooks/useRequest";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/getRestaurants";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { RestaurantTabs } from "./component";
import "../../styles.scss"

export const RestaurantTabsContainer = () => {
    const {data: restaurants, isFetching} = useGetRestaurantsQuery();

    const requestRestaurantsStatus = useRequest(getRestaurants);

    if(isFetching || requestRestaurantsStatus === REQUEST_STATUSES.pending){
        return <span className={"loader"}></span>
    }

    if (!restaurants) {
        return null;
    }
    return (
    <RestaurantTabs restaurants={restaurants} />)
};