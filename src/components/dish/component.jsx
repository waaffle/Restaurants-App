import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { CounterContainer } from "../counter/container";
import styles from './styles.module.scss';

export const Dish = ({ withCart, value, increment, decrement, dish, restaurantId, className}) => {

    return (
        <NavLink className={classNames(styles.link, styles.container)} to={`/dish/${dish.id}`} state={{ restaurantId: restaurantId }}>

            <div className={classNames(styles.dishContainer, className,
                !!withCart && styles.authorization
            )}>
                <div className={styles.text}>
                    <div className={styles.dishName}>{dish?.name}</div>
                    <div>{`${dish?.price} $`}</div>
                </div>
                {/* <img className={styles.image} src={`/images/${dish?.name.replace(/ /g,"")}.jpg`} alt="" /> */}
                {!!withCart &&
                <CounterContainer value={value} increment={increment} decrement={decrement}/>
                }
            </div>

        </NavLink>
    )
}