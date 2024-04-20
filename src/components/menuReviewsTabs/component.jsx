import { NavLink } from "react-router-dom";
import styles from './styles.module.scss'
import classNames from "classnames";

export const MenuReviewsTabs = ({restaurant, className}) => {
    return <div className={classNames(styles.root, className)}>
        <NavLink 
            to={`/restaurants/${restaurant.id}/menu`}
            className={({isActive}) => (classNames(
                styles.link, {
                    [styles.active] : isActive,
                }
            ))}
            >
                Menu
        </NavLink>
        <NavLink 
            to={`/restaurants/${restaurant.id}/reviews`}
            className={({isActive}) => (classNames(
                styles.link, {
                    [styles.active] : isActive,
                }
            ))}
            >
            Reviews
        </NavLink>
    </div>
};