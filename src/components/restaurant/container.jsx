import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Restaurant } from "./component";
import { useSelector } from "react-redux"

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    if (!restaurant) return null;

    return <Restaurant restaurant={restaurant}/>
};