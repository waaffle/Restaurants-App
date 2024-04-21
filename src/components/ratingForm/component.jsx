import styles from "./styles.module.scss"

export const RatingForm = ({ onRatingChange }) => {
    return (
        <div className={styles.root}>
            <div className={styles.ratingItems}>

                <input 
                    id="ratingForm5"
                    type="radio" 
                    onChange={(event) => (onRatingChange(event.target.value))} 
                    className={styles.ratingItem} 
                    name="ratingForm" 
                    value="5" 
                />
                <label htmlFor="ratingForm5" className={styles.ratingLabel}></label>

                <input 
                    id="ratingForm4" 
                    type="radio" 
                    onChange={(event) => (onRatingChange(event.target.value))} 
                    className={styles.ratingItem} 
                    name="ratingForm" 
                    value="4"
                />
                <label htmlFor="ratingForm4" className={styles.ratingLabel}></label>

                <input 
                    id="ratingForm3" 
                    type="radio" 
                    onChange={(event) => (onRatingChange(event.target.value))} 
                    className={styles.ratingItem} 
                    name="ratingForm" 
                    value="3" 
                />
                <label htmlFor="ratingForm3" className={styles.ratingLabel}></label>

                <input 
                    id="ratingForm2" 
                    type="radio" 
                    onChange={(event) => (onRatingChange(event.target.value))} 
                    className={styles.ratingItem} 
                    name="ratingForm" 
                    value="2" 
                />
                <label htmlFor="ratingForm2" className={styles.ratingLabel}></label>

                <input 
                    id="ratingForm1" 
                    type="radio" 
                    onChange={(event) => (onRatingChange(event.target.value))} 
                    className={styles.ratingItem}
                    name="ratingForm" 
                    value="1" 
                />
                <label htmlFor="ratingForm1" className={styles.ratingLabel}></label>
            </div>
        </div>
    )
};