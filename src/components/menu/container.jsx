import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { selectDishIdsByRestaurantId } from "../../redux/entities/dish/selectors";
import { getDishIdsByRestaurantId } from "../../redux/entities/dish/thunks/getDishIdsByRestaurantId";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { Menu } from "./component";

export const MenuContainer = () => {

    const {restaurantId} = useParams();
    
    const requestStatus = useRequest(getDishIdsByRestaurantId, restaurantId);

    const dishIds = useSelector((state) =>
    selectDishIdsByRestaurantId(state, restaurantId)
    );
  
    if (requestStatus === REQUEST_STATUSES.pending ) {
      return <span className={"loader"}></span>;
    }

    return <Menu dishIds={dishIds} />
};