import { useParams } from "react-router-dom";
import { useGetMenuQuery } from "../../redux/service/api";
import { Menu } from "./component";

export const MenuContainer = () => {

    const {restaurantId} = useParams();

    const {data: menu, isFetching} = useGetMenuQuery(restaurantId);

    if (isFetching){
        return <div>Menu Loading...</div>
    }

    if(!menu?.length){
        return null;
    }

    return <Menu menu={menu} restaurantId={restaurantId}/>
};