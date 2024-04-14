import { Dish } from "./component"
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/UserContext";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { decrementDish, incrementDish } from "../../redux/ui/cart";
import { selectAmountDishById } from "../../redux/ui/cart/selectors";
import { useCallback } from "react";

export const DishContainer = ({dishId}) => {

    const dish = useSelector((state) => selectDishById(state, dishId));
    const value = useSelector((state) => selectAmountDishById(state, dishId));


    const dispatch = useDispatch();

    const incrementCallback = useCallback(() => dispatch(incrementDish(dishId)), [dishId, dispatch]);
    const decrementCallback = useCallback(() => dispatch(decrementDish(dishId)),[dishId, dispatch]);
    

    const {user} = useCurrentUser();

    if (!dish) return null;
    return <Dish withCart={!!user} value={value} increment={incrementCallback} decrement={decrementCallback} name = {dish.name}/>
};