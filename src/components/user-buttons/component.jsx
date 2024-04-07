import { Button } from '../button/component';
import { useCurrentUser } from '../../contexts/UserContext';
import styles from './styles.module.scss';


export const UserButtons = () => {

    const {user, login, logout} = useCurrentUser();

    const isAuthorized = !!user;

    return <div className={styles.userButtons}>
                <Button className={styles.myButton} onClick={() => isAuthorized ? logout() : login("Яна")}>
                    {isAuthorized ? "Выйти": "Войти"}
                </Button>
                {isAuthorized && <span>{user}</span>}
            </div>
};
