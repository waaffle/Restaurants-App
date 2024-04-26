import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/UserContext";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { setAmount } from "../../redux/ui/cart";
import { selectAmountDishById } from "../../redux/ui/cart/selectors";
import { Dish } from "./component";

export const DishContainer = ({ dishId, className, isCart = false}) => {

    const {user} = useCurrentUser();
    
    const dish = useSelector((state) => selectDishById(state, dishId));

    const amount = useSelector((state) => selectAmountDishById(state, dish?.id));

    const dispatch = useDispatch();
    const setAmountCallback = useCallback((amount) => dispatch(setAmount({id: dish?.id, amount})), [dish?.id, dispatch])

    if(!dish) return null;

    return (
            <Dish 
                isCart={isCart}
                className={className}
                withCart={!!user} 
                dish = {dish} 
                amount = {amount}
                setAmount = {setAmountCallback}
            />
    )
};