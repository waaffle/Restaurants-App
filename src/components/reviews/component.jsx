/* eslint-disable react/jsx-key */
import { Review } from "../review/component"

export const Reviews = ({ reviews }) => {
    return <ul>
    {
        reviews.map(review => (
            <li><Review text = {review.text} /></li>
        ))
      }
    </ul>
}