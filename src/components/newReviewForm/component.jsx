import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss'
import { useCreateReviewMutation } from "../../redux/service/api";

export const NewReviewForm = ({restaurantId}) => {

    const [text, setText] = useState();

    const [createReview, {isLoading}] = useCreateReviewMutation();

    if (isLoading){
        return <div>Saving...</div>
    }


    return <form className={styles.root} >
        <input className={styles.input} type="text" placeholder="Ваш отзыв" onChange={(event)=> setText(event.target.value)}/>
        <Button onClick={() => {
            setText("");
            createReview({restaurantId, newReview: {
                userId: "dfb982e9-b432-4b7d-a756-7f6ff2e6af55",
                text,
                rating: 5,
            }})
        }}
        className={styles.button}>Добавить отзыв</Button>
    </form>
};