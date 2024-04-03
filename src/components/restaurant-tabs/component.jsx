/* eslint-disable react/jsx-key */
import { Tab } from '../tab/component';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const RestaurantTabs = ({ restaurants, currentRestaurantIndex, onTabClick }) => {

    return (
        <div className={classNames(styles.root, styles.container)}>
            {restaurants?.map((restaurant, index) => (
                <Tab key={restaurant.name}
                title={restaurant.name}
                onClick={() => {
                    onTabClick(index)
                }}
                isActive={currentRestaurantIndex === index}
                />
            ))}
        </div>
    );
};
