import { useState } from "react";
import { Counter } from "../counter/component";

export const Dish = ({ name }) => {
    const [count, setCount] = useState(0);
    return (
        <div>
        <span>{name}</span>
        <Counter key={name} value={count} onChange={setCount}/>
        </div>
    )
}