/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux"
import { Review } from "../review/component"
import styles from './styles.module.scss'
import classNames from "classnames"
import { useEffect } from "react"
import { getReviewIdsByRestaurantId } from "../../redux/entities/review/thunks/getReviewIdsByRestaurantId"
import { selectReviewIdsByRestaurantId } from "../../redux/entities/review/selectors"
import { getUsers } from "../../redux/entities/user/thunks/getUsers"

export const Reviews = ({ restaurantId }) => {
    const reviewsIds = useSelector((state) => selectReviewIdsByRestaurantId(state,restaurantId));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewIdsByRestaurantId(restaurantId))
    }, [restaurantId]);

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    return <ul className={classNames(styles.root)}>
    {
        reviewsIds.map(reviewId => (
            <li key={reviewId}><Review reviewId = {reviewId} /></li>
        ))
      }
    </ul>
}