import classNames from "classnames";
import { useCurrentTheme } from "../../contexts/ThemeContext";
import styles from './styles.module.scss';

export const Button = ({
    children,
    onClick,
    disabled,
    className,
  }) => {
  
    const {theme} = useCurrentTheme();
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(
          styles.myButton,
          className,
          {
            [styles.disabled]: disabled,
            [styles.dark]: theme === "dark",
          }
        )}
      >
        {children}
      </button>
    );
  };