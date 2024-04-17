import { Review } from "./component";

export const ReviewContainer = ({ review }) => {

    return <Review userId={review.userId} text={review.text}/>
};