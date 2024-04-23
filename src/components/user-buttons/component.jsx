import { ButtonContainer } from '../button/container';
import styles from './styles.module.scss';

export const UserButtons = ({ login, logout, isAuthorized, user}) => {
    return <div className={styles.userButtons}>
                <ButtonContainer className={styles.myButton} onClick={() => isAuthorized ? logout() : login("User")}>
                    {isAuthorized ? "Logout": "Login"}
                </ButtonContainer>
                {isAuthorized && <span>{user}</span>}
            </div>
};
