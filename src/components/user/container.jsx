import { useGetUsersQuery } from "../../redux/service/api";
import { User } from "./component";

export const UserContainer = ({userId, className}) => {
    const {data: user} = useGetUsersQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result?.data.find(({id}) => (id === userId))
        })
    })
    return <User name={user?.name} className={className} />
};