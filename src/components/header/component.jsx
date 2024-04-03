import classNames from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles.module.scss';
import { Button } from '../button/component';
import { ThemeContext } from '../../contexts/ThemeContext';

export const Header = ({ className }) => {
    
    const [user, setUser] = useContext(UserContext);

    const changeUser = () => {
        setUser(user === "notAuthorized" ? "authorized" : "notAuthorized");
    }
    const theme = useContext(ThemeContext);

    return (
        <header className={classNames(styles.root, className, 
            theme === "dark" && styles.dark
            )}>
            <div className={classNames(styles.container, styles.headerInner)}>
                <h1 className={styles.title}>
                        HEADER
                </h1>
                <div className={styles.authorization}>
                <Button className={styles.myButton} onClick={changeUser}>
                    {user === "notAuthorized" ? "Войти": "Выйти"}
                </Button>
                {user === "authorized" && <span>Яна</span>}
                </div>
            </div>
        </header>
    )}