/* eslint-disable react/jsx-key */
import { Review } from "../review/component"
import styles from './styles.module.scss'
import classNames from "classnames"

export const Reviews = ({ reviewsIds }) => {
    return <ul className={classNames(styles.root)}>
    {
        reviewsIds.map(reviewId => (
            <li key={reviewId}><Review reviewId = {reviewId} /></li>
        ))
      }
    </ul>
}