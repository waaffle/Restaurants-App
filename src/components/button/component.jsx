import classNames from "classnames";
import styles from './styles.module.scss'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Button = ({
    children,
    onClick,
    disabled,
    className,
  }) => {
  
    const {theme} = useContext(ThemeContext)
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          styles.myButton,
          className,
          {
            [styles.disabled]: disabled,
            [styles.dark]: theme === 'dark',
          }
        )}
      >
        {children}
      </button>
    );
  };