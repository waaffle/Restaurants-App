import styles from './styles.module.scss';
import classNames from 'classnames';

export const Tab = ({title, isActive, onClick}) => {
    return (
        <button className={
            classNames(
                styles.root,
                {
                    [styles.active]: isActive
                })} 
            onClick={onClick} disabled={isActive}>
            {title}
        </button>
    )
};