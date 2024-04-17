import { useGetMenuQuery } from "../../redux/service/api";
import { Menu } from "./component";

export const MenuContainer = ({restaurantId}) => {

    const {data: menu, isFetching} = useGetMenuQuery(restaurantId);

    if (isFetching){
        return <div>Menu Loading...</div>
    }

    if(!menu?.length){
        return null;
    }

    return <Menu menu={menu}/>
};