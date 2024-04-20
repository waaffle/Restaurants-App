import classNames from "classnames";
import { CounterContainer } from "../../components/counter/container";
import styles from './styles.module.scss';

export const DishPage = ({ withCart, value, increment, decrement, dish}) => {

    return (
        <div className={classNames(styles.root, 
            !!withCart && styles.authorization
        )}>
            <span className={styles.dishName}>{dish?.name}</span>
            <img className={styles.image} src={`/images/${dish?.name.replace(/ /g,"")}.jpg`} alt="" />
            {!!withCart &&
            <CounterContainer value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}