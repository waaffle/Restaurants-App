import classNames from 'classnames';
import { DishContainer } from '../dish/container';
import styles from './styles.module.scss';

export const Menu = ({ menu, restaurantId }) =>{
    return <div className={classNames(styles.root, styles.container)}>
      <ul className={styles.ul}>
      {
        menu.map(dish => (
            <li key={dish?.id}>
              <DishContainer dish={dish} restaurantId={restaurantId}/> 
            </li>
        ))
      }
    </ul>
    </div>
}