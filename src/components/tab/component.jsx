import classNames from 'classnames';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

export const Tab = ({restaurant}) => {  
    return (
        <NavLink 
        to={`/restaurants/${restaurant.id}`}
        className={({isActive}) => 
            classNames(styles.root,
                {
                    [styles.active]: isActive
                })}>
            {restaurant.name}
        </NavLink>
    )
};