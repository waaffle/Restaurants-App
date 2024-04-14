/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { ReviewContainer } from "../review/container";
import styles from './styles.module.scss';
export const Reviews = ({ reviewsIds }) => {

    return <ul className={classNames(styles.root)}>
    {
        reviewsIds.map(reviewId => (
            <li key={reviewId}><ReviewContainer reviewId = {reviewId} /></li>
        ))
      }
    </ul>
}