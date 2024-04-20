import { useGetRestaurantsQuery } from "../../redux/service/api";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = () => {
    const {data: restaurants, isFetching} = useGetRestaurantsQuery();

    if(isFetching){
        return <div>Restaurants Loading...</div>
    }

    if (!restaurants) {
        return null;
    }
    return (
    <RestaurantTabs restaurants={restaurants} />)
};