import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { RestaurantTabs } from "./component";

export const RestaurantTabsContainer = (props) => {

    const restaurantsIds = useSelector(selectRestaurantIds);

    return (
    <RestaurantTabs {...props} restaurantIds={restaurantsIds}/>)
};