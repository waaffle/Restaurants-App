import classNames from 'classnames';
import styles from './styles.module.scss';

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