import classNames from 'classnames';
import { useCurrentTheme } from '../../contexts/ThemeContext';
import { ThemeToggle } from '../theme-toggle/component';
import { UserButtons } from '../user-buttons/component';
import styles from './styles.module.scss';

export const Header = ({ className }) => {

    const {theme} = useCurrentTheme();
    return (
        <header className={classNames(styles.root, className, 
            theme === "dark" && styles.dark
            )}>
            <div className={classNames(styles.container, styles.headerInner)}>
                <ThemeToggle />
                <h1 className={styles.title}>
                        HEADER
                </h1>
                <UserButtons />
            </div>
        </header>
    )}