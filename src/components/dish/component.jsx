import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { CounterContainer } from "../counter/container";
import styles from './styles.module.scss';

export const Dish = ({ withCart, value, increment, decrement, dish, restaurantId, className}) => {

    return (
        <div className={classNames( styles.root,styles.container)}>
            <NavLink  className={classNames(styles.link, !!withCart && styles.authorization)} to={`/dish/${dish.id}`} state={{ restaurantId: restaurantId }}>

                {/* <div className={classNames(className,
                    !!withCart && styles.authorization)}> */}

                    <div className={classNames(styles.text,className)}>
                        <div className={styles.dishName}>{dish?.name}</div>
                        <div>{`${dish?.price} $`}</div>
                    </div>

                {/* </div> */}
                    {/* <img className={styles.image} src={`/images/${dish?.name.replace(/ /g,"")}.jpg`} alt="" /> */}
            </NavLink>
                {!!withCart &&
                <CounterContainer value={value} increment={increment} decrement={decrement}/>
                }
            
            </div>
        
    )
}