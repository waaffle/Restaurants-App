import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../tab/component";
import { useSelector } from "react-redux"

export const RestaurantTabContainer = ({restaurantId, ...props}) => {
    const restaurant = useSelector((state) => (selectRestaurantById(state, restaurantId)));
    
    if (!restaurant){
        return null;
    }

    return <Tab {...props} title={restaurant?.name}/>
};