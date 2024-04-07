import classNames from 'classnames';
import { useCurrentTheme } from '../../contexts/ThemeContext';
import styles from './styles.module.scss';

export const Footer = ({ className }) => {
    const {theme} = useCurrentTheme();
    console.log(theme)
    
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