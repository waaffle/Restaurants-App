/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { ReviewContainer } from "../review/container";
import styles from './styles.module.scss';
export const Reviews = ({ reviews }) => {

    return <ul className={classNames(styles.root)}>
    {
        reviews.map(review => (
            <li key={review?.id}><ReviewContainer review = {review} className={styles.review} /></li>
        ))
      }
    </ul>
}