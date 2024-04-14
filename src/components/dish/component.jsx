import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../../contexts/UserContext";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { decrementDish, incrementDish } from "../../redux/ui/cart";
import { selectAmountDishById } from "../../redux/ui/cart/selectors";
import { Counter } from "../counter/component";
import styles from './styles.module.scss';

export const Dish = ({ dishId }) => {

    const dish = useSelector((state) => selectDishById(state, dishId));
    const value = useSelector((state) => selectAmountDishById(state, dishId));


    const dispatch = useDispatch();
    const increment = () => dispatch(incrementDish(dishId));
    const decrement = () => dispatch(decrementDish(dishId));
    

    const {user} = useCurrentUser();

    if (!dish) return null;

    return (
        <div className={classNames(styles.root, 
            !!user && styles.authorization
        )}>
            <span className={styles.dishName}>{dish.name}</span>
            <img className={styles.image} src={`/images/${dish.name.replace(/ /g,"")}.jpg`} alt="" />
            {!!user &&
            <Counter value={value} increment={increment} decrement={decrement}/>
            }
        </div>
    )
}