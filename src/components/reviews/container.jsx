import { useParams } from "react-router-dom";
import { useGetReviewsQuery, useGetUsersQuery } from "../../redux/service/api";
import { Reviews } from "./component";
import styles from './styles.module.scss'
import { NewReviewFormContainer } from "../newReviewForm/container";
import classNames from "classnames";
import "../../styles.scss";

export const ReviewsContainer = () => {
    const {restaurantId} = useParams();

    const {data: reviews, isFetching: reviewsFetching} = useGetReviewsQuery(restaurantId);
    const { isFetching: usersFetching} = useGetUsersQuery();

    if (reviewsFetching || usersFetching){
        return <span className={classNames(styles.load, "loader")}></span>
    }

    return <div className={classNames(styles.reviews, styles.container)}>
            <Reviews reviews = {reviews} />
            <NewReviewFormContainer restaurantId={restaurantId} className={styles.review} ></NewReviewFormContainer>
    </div>
};