import { ButtonContainer } from '../button/container';
import styles from './styles.module.scss';

export const Counter = ({value, increment, decrement, min = 0, max = 5}) => {
    
    return (
        <div className={styles.root}>
            <ButtonContainer className={styles.action}
            onClick={decrement}
            disabled={value <= min}>
                -
            </ButtonContainer>

            <div className={styles.number}>
                {value}
            </div>

            <ButtonContainer className={styles.action}
            onClick={increment}
            disabled={value >= max}>
                +
            </ButtonContainer>
        </div>
    );
};
