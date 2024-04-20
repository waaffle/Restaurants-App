import { useState } from "react";
import { Button } from "../button/component";
import styles from './styles.module.scss';
import classNames from "classnames";

export const NewReviewForm = ({onClick, className}) => {
    
    const [text, setText] = useState();

    return <form className={classNames(styles.root, className)} >
        <input className={styles.input} type="text" placeholder="Ваш отзыв" onChange={(event)=> setText(event.target.value)}/>
        <Button onClick={() => {
            onClick(text);
            setText("");
        }}
        className={styles.button}>Добавить отзыв</Button>
    </form>
};