import { useContext } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../../contexts/ThemeContext';

export const Footer = ({ className }) => {
    const {theme} = useContext(ThemeContext);
    
    return (
    <footer className={classNames(styles.root, className, 
        theme === "dark" && styles.dark
        )}>
        <div className={styles.container}>
            <h1 className={styles.title}>
                    FOOTER
            </h1>
        </div>
    </footer>
)}