import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { User } from "../user/component";

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));

    if (!review) return null;


    return (
        <div>
            <User userId={review.userId}></User>
            <span>{` - ${review.text}`}</span>
            
        </div>
)}