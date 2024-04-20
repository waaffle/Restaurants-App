import { Outlet } from 'react-router-dom';
import { RestaurantTabsContainer } from '../components/restaurant-tabs/container';

export const RestaurantPage = () => {
    return (
    <div>
        <RestaurantTabsContainer />
        <Outlet />
    </div>)
};