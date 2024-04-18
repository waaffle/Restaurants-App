import { useGetReviewsQuery, useGetUsersQuery } from "../../redux/service/api";
import { Reviews } from "./component";
import styles from './styles.module.scss'

export const ReviewsContainer = ({ restaurantId }) => {
    const {data: reviews, isFetching: reviewsFetching} = useGetReviewsQuery(restaurantId);
    const { isFetching: usersFetching} = useGetUsersQuery();

    if (reviewsFetching || usersFetching){
        return <div className={styles.load}>Reviews Loading...</div>
    }

    return <Reviews reviews={reviews}/>
};