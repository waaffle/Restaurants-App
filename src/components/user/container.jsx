import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";
import { User } from "./component";

export const UserContainer = ({userId}) => {
    
    const user = useSelector((state) => selectUserById(state, userId));
    if (!user) return null;

    return <User name={user.name} />
};