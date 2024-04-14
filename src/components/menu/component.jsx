import { DishContainer } from '../dish/container';
import styles from './styles.module.scss';

export const Menu = ({ menuIds }) =>{

    return <ul className={styles.root}>
      {
        menuIds.map(dishId => (
            <li key={dishId}>
              <DishContainer dishId={dishId} /> 
            </li>
        ))
      }
    </ul>
}