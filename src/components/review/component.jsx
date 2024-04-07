import { useSelector } from "react-redux"
import { User } from "../user/component";

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => state.review.entities[reviewId]);

    if (!review) return null;


    return (
        <div>
            <User userId={review.userId}></User>
            <span>{` - ${review.text}`}</span>
            
        </div>
)}