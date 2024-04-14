import { UserContainer } from "../user/container";

export const Review = ({userId, text}) => {
    return (
        <div>
            <UserContainer userId={userId}></UserContainer>
            <span>{` - ${text}`}</span>  
        </div>
)}