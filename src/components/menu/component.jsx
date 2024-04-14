import { useEffect } from "react";
import { Dish } from "../dish/component"
import styles from './styles.module.scss'
import { getDishIdsByRestaurantId } from "../../redux/entities/dish/thunks/getDishIdsByRestaurantId";
import { useDispatch, useSelector } from "react-redux";
import { selectDishIdsByRestaurantId } from "../../redux/entities/dish/selectors";

export const Menu = ({ restaurantId }) =>{

    const dispatch = useDispatch();
    const menuIds = useSelector((state) => selectDishIdsByRestaurantId(state, restaurantId))
    useEffect(() => {
      dispatch(getDishIdsByRestaurantId(restaurantId))
    }, [restaurantId])
  
    return <ul className={styles.root}>
      {
        menuIds.map(dishId => (
            <li key={dishId}>
              <Dish dishId={dishId} /> 
            </li>
        ))
      }
    </ul>
}