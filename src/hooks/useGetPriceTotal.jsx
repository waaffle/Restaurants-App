import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dish/selectors";
import { selectAmountDishById } from "../redux/ui/cart/selectors";

export const useGetPriceTotal = ( dishId ) => {
        
        const dish = useSelector((state) => selectDishById(state, dishId));
        const amount = useSelector((state) => selectAmountDishById(state, dishId))

    return dish?.price*amount;
};