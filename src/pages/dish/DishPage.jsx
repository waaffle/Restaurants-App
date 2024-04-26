import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { DishPageContainer } from "./container";

export const DishPage = () => {
    const { dishId } = useParams();

    const dish = useSelector((state) => selectDishById(state, dishId)) || JSON.parse(sessionStorage.getItem('dish'));

    sessionStorage.setItem('dish', JSON.stringify(dish));
    
    if (!dish ) return null;
    return <DishPageContainer dish={dish} />
};