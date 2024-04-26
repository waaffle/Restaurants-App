import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/UserContext";
import { setAmount } from "../../redux/ui/cart";
import { selectAmountDishById } from "../../redux/ui/cart/selectors";
import { DishPage } from "./component";

export const DishPageContainer = ({dish}) => {

    const {user} = useCurrentUser();   

    const amount = useSelector((state) => selectAmountDishById(state, dish?.id));

    const dispatch = useDispatch();
    const setAmountCallback = useCallback((amount) => dispatch(setAmount({id: dish?.id, amount})), [dish?.id, dispatch])

    

    return (
            <DishPage 
                withCart={!!user} 
                amount={amount} 
                onChange={setAmountCallback} 
                dish = {dish} 
            />
    )
};