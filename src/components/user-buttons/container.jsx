import { useCurrentUser } from "../../contexts/UserContext";
import { UserButtons } from "./component";

export const UserButtonsContainer = () => {
    const {user, login, logout} = useCurrentUser();

    const isAuthorized = !!user;

    return <UserButtons login={login} logout={logout} isAuthorized={isAuthorized} user={user}/>
};