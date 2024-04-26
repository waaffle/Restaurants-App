import classNames from 'classnames'
import styles from './styles.module.scss'

export const CartButton = ({ buttonRef, onClick, className}) => {
    return <div className={classNames(styles.button, className)} ref={buttonRef} onClick={onClick}>
        <svg width="40px" 
        height="40px" 
        viewBox="0 0 24.00 24.00" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        stroke="#f1aa04">
            <g id="SVGRepo_bgCarrier" 
            strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" 
            strokeLinecap="round"
             strokeLinejoin="round"></g>
             <g id="SVGRepo_iconCarrier"> 
             <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" 
             stroke="#f1aa04" 
             strokeWidth="1.296" 
             strokeLinecap="round" 
             strokeLinejoin="round">
        </path> </g></svg>
    </div>
};