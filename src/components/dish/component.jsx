import { Counter } from "../counter/component";
import { useCounter } from "../../hooks/useCounter";

export const Dish = ({ name }) => {

    const {value, increment, decrement} = useCounter();

    return (
        <div>
        <span>{name}</span>
        <Counter value={value} increment={increment} decrement={decrement}/>
        </div>
    )
}