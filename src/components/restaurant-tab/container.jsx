import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Tab } from "../tab/component";

export const RestaurantTabContainer = ({ restaurantId }) => {
    const {data: restaurant} = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => ({
            ...result, 
            data: result?.data.find(({id}) => (id === restaurantId))
    })})
    
    if (!restaurant){
        return null;
    }

    return <Tab restaurant={restaurant}/>
};