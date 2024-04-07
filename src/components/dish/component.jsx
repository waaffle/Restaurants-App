import classNames from "classnames";
import { useCurrentUser } from "../../contexts/UserContext";
import { useCounter } from "../../hooks/useCounter";
import { Counter } from "../counter/component";
import styles from './styles.module.scss';

export const Dish = ({ name }) => {

    const {value, increment, decrement} = useCounter();
    const {user} = useCurrentUser();

    return (
        <div className={classNames(styles.root, 
            !!user && styles.authorization
        )}>
            <span className={styles.dishName}>{name}</span>
            <img className={styles.image} src={`/images/${name.replace(/ /g,"")}.jpg`} alt="" />
            {!!user &&
            <Counter value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}