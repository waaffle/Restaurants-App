import classNames from "classnames";
import { UserContainer } from "../user/container";
import styles from "./styles.module.scss"
import { RatingContainer } from "../rating/container";

export const Review = ({review, theme, className}) => {
    return (
        <div className={classNames(styles.root, className, theme === "dark" && styles.dark)}>
            <div className={styles.text}>
                <UserContainer userId={review.userId} className={styles.user}></UserContainer>
                <div>{review.text}</div>  
            </div>
            <RatingContainer review={review} />
        </div>
)}