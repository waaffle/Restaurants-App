import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { selectRestaurantById } from '../../redux/entities/restaurant/selectors';

export const RestaurantTab = ({restaurantId, isActive, onClick}) => {

    const restaurant = useSelector((state) => (selectRestaurantById(state, restaurantId)));
    
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