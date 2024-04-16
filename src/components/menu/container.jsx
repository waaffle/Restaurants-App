import { useSelector } from "react-redux";
import { useRequest } from "../../hooks/useRequest";
import { selectDishIdsByRestaurantId } from "../../redux/entities/dish/selectors";
import { getDishIdsByRestaurantId } from "../../redux/entities/dish/thunks/getDishIdsByRestaurantId";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {

    const menuIds = useSelector((state) => selectDishIdsByRestaurantId(state, restaurantId))
    const  menuRequestStatus = useRequest(getDishIdsByRestaurantId, restaurantId);

    if (menuRequestStatus === REQUEST_STATUSES.pending){
        return <div>Menu Loading...</div>
    }

    return <Menu menuIds={menuIds}/>
};