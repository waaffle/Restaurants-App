import { useSelector } from "react-redux";
import { useRequest } from "../../hooks/useRequest";
import { selectReviewIdsByRestaurantId } from "../../redux/entities/review/selectors";
import { getReviewIdsByRestaurantId } from "../../redux/entities/review/thunks/getReviewIdsByRestaurantId";
import { getUsers } from "../../redux/entities/user/thunks/getUsers";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
    const reviewsIds = useSelector((state) => selectReviewIdsByRestaurantId(state,restaurantId));

    const  reviewsRequestStatus = useRequest(getReviewIdsByRestaurantId, restaurantId);
    const  usersRequestStatus = useRequest(getUsers);

    if (reviewsRequestStatus === REQUEST_STATUSES.pending || usersRequestStatus === REQUEST_STATUSES.pending){
        return <div>Reviews Loading...</div>
    }

    return <Reviews reviewsIds={reviewsIds}/>
};