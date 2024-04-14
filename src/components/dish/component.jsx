import classNames from "classnames";
import { CounterContainer } from "../counter/container";
import styles from './styles.module.scss';

export const Dish = ({ withCart, value, increment, decrement, name}) => {

    return (
        <div className={classNames(styles.root, 
            !!withCart && styles.authorization
        )}>
            <span className={styles.dishName}>{name}</span>
            <img className={styles.image} src={`/images/${name.replace(/ /g,"")}.jpg`} alt="" />
            {!!withCart &&
            <CounterContainer value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}