import { Outlet, useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Restaurant } from "./component";

export const RestaurantContainer = () => {

    const { restaurantId } = useParams();
    
    const {data: restaurant} = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result, 
            data: result?.data.find(({id}) => (id === restaurantId))
    })})
    
    if (!restaurant) return null;

    return <div>
        <Restaurant restaurant={restaurant}/>
        <Outlet />
        </div>
};