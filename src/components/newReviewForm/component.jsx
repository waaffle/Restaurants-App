import classNames from "classnames";
import { useState } from "react";
import { Button } from "../button/component";
import { RatingFormContainer } from "../ratingForm/container";
import styles from './styles.module.scss';

export const NewReviewForm = ({onClick, theme, className}) => {
    
    const [text, setText] = useState();
    const [rating, setRating] = useState();

    const handleRatingChange = (rating) => {
        setRating(parseInt(rating));
    };

    return <div className={classNames(styles.root, styles.container, className, 
    theme === "dark" && styles.dark
    )} >
        <div className={styles.title}>Leave your review</div>
        <textarea 
            className={styles.input} 
            type="text" placeholder="Your review" 
            onChange={(event)=> setText(event.target.value)}
            rows="4" cols="70"
            />

        <RatingFormContainer onRatingChange={handleRatingChange}/>

        <Button onClick={() => {
            onClick(text, rating);
            setText("");
        }}
        className={styles.button}>Add review</Button>
    </div>
};