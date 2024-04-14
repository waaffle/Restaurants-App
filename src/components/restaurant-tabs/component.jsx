/* eslint-disable react/jsx-key */
import classNames from 'classnames';
import { RestaurantTabContainer } from '../restaurant-tab/container';
import styles from './styles.module.scss';

export const RestaurantTabs = ({restaurantIds, currentRestaurantId, onTabClick }) => {

    return (
        <div className={classNames(styles.root, styles.container)}>
            {restaurantIds?.map((restaurantId) => (
                <RestaurantTabContainer key={restaurantId}
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
