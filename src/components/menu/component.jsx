import { DishContainer } from '../dish/container';
import styles from './styles.module.scss';

export const Menu = ({ menu }) =>{
    return <ul className={styles.root}>
      {
        menu.map(dish => (
            <li key={dish?.id}>
              <DishContainer dish={dish} /> 
            </li>
        ))
      }
    </ul>
}