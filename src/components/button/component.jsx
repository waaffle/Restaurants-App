import classNames from "classnames";
import { useCurrentTheme } from "../../contexts/ThemeContext";
import styles from './styles.module.scss';

export const Button = ({
    children,
    onClick,
    disabled,
    className,
    isCart,
  }) => {
  
    const {theme} = useCurrentTheme();
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          styles.myButton,
          isCart && styles.buttonCart,
          className,
          {
            [styles.disabled]: disabled,
            [styles.dark]: theme === "dark",
          }
        )}
      >
        <div className={classNames(!!isCart && styles.children)}>
        {children}
        </div>
      </button>
    );
  };