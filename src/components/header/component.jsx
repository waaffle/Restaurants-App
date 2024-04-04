import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';
import { UserContext } from '../../contexts/UserContext';
import { Button } from '../button/component';
import styles from './styles.module.scss';

export const Header = ({ className }) => {
    
    const {user, setUser} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const changeUser = () => {
        setUser(user === "notAuthorized" ? "authorized" : "notAuthorized");
    }

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    

    return (
        <header className={classNames(styles.root, className, 
            theme === "dark" && styles.dark
            )}>
            <div className={classNames(styles.container, styles.headerInner)}>
                <ThemeProvider value={{theme: "light"}}>
                    <Button onClick={changeTheme}>
                            {theme}
                    </Button>
                </ThemeProvider>

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