/* eslint-disable react/jsx-key */
import { Review } from "../review/component"
import styles from './styles.module.scss'
import classNames from "classnames"

export const Reviews = ({ reviews }) => {
    return <ul className={classNames(styles.root)}>
    {
        reviews.map(review => (
            <li key={review.text}><Review text = {review.text} /></li>
        ))
      }
    </ul>
}