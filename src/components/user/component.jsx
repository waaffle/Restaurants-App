import classNames from "classnames";
import styles from "./styles.module.scss"

export const User = ({ name, className }) => {
    return <div className={classNames(styles.name,className)}>{name}</div>
};