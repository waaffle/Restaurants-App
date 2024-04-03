import { Button } from '../button/component';
import styles from './styles.module.scss'

export const Counter = ({value, increment, decrement, min = 0, max = 5}) => {
    
    return (
        <div className={styles.root}>
            <Button className={styles.action}
            onClick={decrement}
            disabled={value <= min}>
                -
            </Button>

            <div className={styles.number}>
                {value}
            </div>

            <Button className={styles.action}
            onClick={increment}
            disabled={value >= max}>
                +
            </Button>
        </div>
    );
};
