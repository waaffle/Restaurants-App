import { useLocation, useParams } from "react-router-dom";
import { useGetMenuQuery } from "../../redux/service/api";
import { DishPageContainer } from "./container";

export const DishPage = () => {
    const { dishId } = useParams();
    const { state } = useLocation();
    
    const {data: dish} = useGetMenuQuery(state.restaurantId, {
        selectFromResult: (result) => ({
            ...result, 
            data: result?.data.find(({id}) => (id === dishId))
    })})
    
    if (!dish) return null;
    return <DishPageContainer dish={dish} />
};