import { Outlet, useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Restaurant } from "./component";

export const RestaurantContainer = () => {

    const { restaurantId } = useParams();

    const {data: restaurants} = useGetRestaurantsQuery(undefined);
    

    if (!restaurants) {
        return null;
    }

    const restaurant = restaurants.find(({id}) => (id === restaurantId));
    
    if (!restaurant) return null;

    return <div>
        <Restaurant restaurant={restaurant}/>
        <Outlet />
        </div>
};