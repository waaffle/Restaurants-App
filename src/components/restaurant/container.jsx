import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Restaurant } from "./component";

export const RestaurantContainer = ({restaurantId}) => {
    const {data: restaurant} = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result, 
            data: result?.data.find(({id}) => (id === restaurantId))
    })})
    
    if (!restaurant) return null;

    return <Restaurant restaurant={restaurant}/>
};