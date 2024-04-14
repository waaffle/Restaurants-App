import classNames from 'classnames';
import { ThemeToggleContainer } from '../theme-toggle/container';
import { UserButtonsContainer } from '../user-buttons/container';
import styles from './styles.module.scss';

export const Header = ({ theme, className }) => {
    return (
        <header className={classNames(styles.root, className, 
            theme === "dark" && styles.dark
            )}>
            <div className={classNames(styles.container, styles.headerInner)}>
                <ThemeToggleContainer />
                <h1 className={styles.title}>
                        HEADER
                </h1>
                <UserButtonsContainer />
            </div>
        </header>
    )}