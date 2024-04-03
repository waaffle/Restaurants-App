import { Counter } from "../counter/component";
import { useCounter } from "../../hooks/useCounter";
import styles from './styles.module.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Dish = ({ name}) => {

    const {value, increment, decrement} = useCounter();
    const [user] = useContext(UserContext);

    return (
        <div className={styles.root}>
            <span className={styles.dishName}>{name}</span>
            {user === "authorized" &&
            <Counter value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}