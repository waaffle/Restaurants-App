import classNames from "classnames";
import { UserContainer } from "../user/container";
import styles from "./styles.module.scss"

export const Review = ({review, theme, className}) => {
    return (
        <div className={classNames(styles.root, className, theme === "dark" && styles.dark)}>
            <div className={styles.text}>
                <UserContainer userId={review.userId}></UserContainer>
                <div>{review.text}</div>  
            </div>
            <div>
                rating
            </div>
        </div>
)}