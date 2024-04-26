import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { CounterContainer } from "../counter/container";
import styles from './styles.module.scss';

export const Dish = ({ withCart, dish, className, amount, setAmount, isCart}) => {

    return (
        <div className={classNames( 
            styles.root,
            styles.container, 
            className, 
            !!withCart && styles.authorization, 
            {
                [styles.rootCart]: isCart,
                [styles.authorizationCart]: isCart
            }
            )}>

            {isCart ? <>
                            <NavLink  className={classNames(styles.link)} to={`/dish/${dish?.id}`} >
                                    <div className={classNames(styles.dishName, styles.dishNameCart)}>{dish?.name}</div>   
                            </NavLink>
                            {!!withCart &&
                            <CounterContainer amount={amount} onChange={setAmount} isCart={isCart}/>
                            }
                            <div className={styles.priceCart}>{`${dish?.price}$`}</div>
                        </>
                      :
                        <>
                            <NavLink  className={classNames(styles.link)} to={`/dish/${dish?.id}`} >
                                <div className={classNames(styles.title)}>
                                    <div className={classNames(styles.dishName)}>{dish?.name}</div>
                                    <div className={styles.price}>{`${dish?.price}$`}</div>
                                </div>
                            </NavLink>
                            {!!withCart &&
                            <CounterContainer amount={amount} onChange={setAmount} isCart={isCart}/>
                            }
                        </>
            }
            
            
        </div>
        
    )
}