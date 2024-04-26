import styles from "./styles.module.scss"

export const Popover = ({ children, x, y, onClose }) => {
    return (
        <>
        <div className={styles.overlay} onClick={onClose} />
        <div className={styles.root} style={{left: x, top: y}}>
            {children}
        </div>
        </>
    )
};