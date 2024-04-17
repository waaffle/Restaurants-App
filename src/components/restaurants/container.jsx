import { useGetRestaurantsQuery } from "../../redux/service/api";
import { Restaurants } from "./component";


export const RestaurantsContainer = () => {
    const {data: restaurants, isFetching} = useGetRestaurantsQuery();

    if(isFetching){
        return <div>Restaurants Loading...</div>
    }

    if (!restaurants) {
        return null;
    }

    return ( 
        <Restaurants restaurants={restaurants}/>
    )
};