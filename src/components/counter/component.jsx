import { ButtonContainer } from '../button/container';
import styles from './styles.module.scss';

export const Counter = ({amount, isCart, onChange, min = 0, max = 5}) => {
    
    return (
        <div className={styles.root}>
            <ButtonContainer className={isCart ? styles.actionCart : styles.action}
            isCart={isCart}
            onClick={() => onChange(amount - 1)}
            disabled={amount <= min}>
                -
            </ButtonContainer>

            <div className={styles.number}>
                {amount}
            </div>

            <ButtonContainer className={isCart ? styles.actionCart : styles.action}
            isCart={isCart}
            onClick={() => onChange(amount + 1)}
            disabled={amount >= max}>
                +
            </ButtonContainer>
        </div>
    );
};
