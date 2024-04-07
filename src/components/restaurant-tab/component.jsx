import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const RestaurantTab = ({restaurantId, isActive, onClick}) => {

    const restaurant = useSelector((state) => (state.restaurant.entities[restaurantId]));
    
    if (!restaurant){
        return null;
    }
    return (
        <button className={
            classNames(
                styles.root,
                {
                    [styles.active]: isActive
                })} 
            onClick={onClick} disabled={isActive}>
            {restaurant?.name}
        </button>
    )
};