import { Dish } from "../dish/component"
import styles from './styles.module.scss'

export const Menu = ({ menuIds }) =>{
  
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