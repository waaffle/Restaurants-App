/* eslint-disable react/jsx-key */
import { Tab } from '../tab/component';

export const RestaurantTabs = ({ restaurants, currentRestaurantIndex, onTabClick }) => {

    return (
        <div>
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
