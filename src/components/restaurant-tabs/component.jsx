/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';
import { RestaurantTab} from '../restaurant-tab/component';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';

export const RestaurantTabs = ({currentRestaurantId, onTabClick }) => {
    const restaurantsIds = useSelector(selectRestaurantIds)
    return (
        <div className={classNames(styles.root, styles.container)}>
            {restaurantsIds?.map((restaurantId) => (
                <RestaurantTab key={restaurantId}
                restaurantId={restaurantId}
                onClick={() => {
                    onTabClick(restaurantId)
                }}
                isActive={currentRestaurantId === restaurantId}
                />
            ))}
        </div>
    );
};
