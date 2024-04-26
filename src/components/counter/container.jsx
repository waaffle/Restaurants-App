import { Counter } from "./component";


export const CounterContainer = ({amount, onChange, isCart}) => {
    return <Counter amount={amount} onChange={onChange} isCart={isCart} />
};