import { useGetReviewsQuery, useGetUsersQuery } from "../../redux/service/api";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
    const {data: reviews, isFetching: reviewsFetching} = useGetReviewsQuery(restaurantId);
    const { isFetching: usersFetching} = useGetUsersQuery();

    if (reviewsFetching || usersFetching){
        return <div>Reviews Loading...</div>
    }

    return <Reviews reviews={reviews}/>
};