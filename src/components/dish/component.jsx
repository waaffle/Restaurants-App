import { Counter } from "../counter/component";
import { useCounter } from "../../hooks/useCounter";
import styles from './styles.module.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import classNames from "classnames";

export const Dish = ({ name }) => {

    const {value, increment, decrement} = useCounter();
    const {user} = useContext(UserContext);

    return (
        <div className={classNames(styles.root, 
            user === "authorized" && styles.authorization
        )}>
            <span className={styles.dishName}>{name}</span>
            <img className={styles.image} src={`/images/${name.replace(/ /g,"")}.jpg`} alt="" />
            {user === "authorized" &&
            <Counter value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}