import styles from "./styles.module.scss"

export const Rating = ({ review }) => {
    return (
        <div className={styles.root}>
            <div className={styles.ratingItems}>
                <input id="rating5" type="radio" disabled defaultChecked={review.rating === 5} className={styles.ratingItem} name={`${review.id}`} value="5" />
                <label htmlFor="rating5" className={styles.ratingLabel}></label>

                <input id="rating4" type="radio" disabled defaultChecked={review.rating === 4} className={styles.ratingItem} name={`${review.id}`} value="4" />
                <label htmlFor="rating4" className={styles.ratingLabel}></label>

                <input id="rating3" type="radio" disabled defaultChecked={review.rating === 3} className={styles.ratingItem} name={`${review.id}`} value="3" />
                <label htmlFor="rating3" className={styles.ratingLabel}></label>

                <input id="rating2" type="radio" disabled defaultChecked={review.rating === 2} className={styles.ratingItem} name={`${review.id}`} value="2" />
                <label htmlFor="rating2" className={styles.ratingLabel}></label>

                <input id="rating1" type="radio" disabled defaultChecked={review.rating === 1} className={styles.ratingItem} name={`${review.id}`} value="1" />
                <label htmlFor="rating1" className={styles.ratingLabel}></label>
            </div>
        </div>
    )
};