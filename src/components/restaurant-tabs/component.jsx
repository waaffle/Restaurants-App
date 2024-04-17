/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import { RestaurantTabContainer } from '../restaurant-tab/container';
import styles from './styles.module.scss';

export const RestaurantTabs = ({restaurants, currentRestaurantId, onTabClick }) => {

    return (
        <div className={classNames(styles.root, styles.container)}>
            {restaurants?.map((restaurant) => (
                <RestaurantTabContainer key={restaurant?.id}
                restaurantId={restaurant?.id}
                onClick={() => {
                    onTabClick(restaurant?.id)
                }}
                isActive={currentRestaurantId === restaurant?.id}
                />
            ))}
        </div>
    );
};
