import classNames from 'classnames';
import { DishContainer } from '../dish/container';
import styles from './styles.module.scss';

export const Menu = ({ dishIds }) =>{
    return (
    <div className={classNames(styles.root,styles.container)}>
      <div className={classNames(styles.dish)}>
        <ul className={styles.ul}>
          {
            dishIds.map(dishId => (
                <li key={dishId}>
                  <DishContainer dishId={dishId} className={styles.dishMargin}/> 
                </li>
            ))
          }
        </ul>
      </div>
      <div>
        
      </div>
    </div>
    )
}