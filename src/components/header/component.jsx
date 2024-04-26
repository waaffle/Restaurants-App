import classNames from 'classnames';
import { ThemeToggleContainer } from '../theme-toggle/container';
import { UserButtonsContainer } from '../user-buttons/container';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Popover } from '../popover/component';
import { CartButton } from '../cartButton/component';
import { CartContainer } from '../cart/container';

export const Header = ({ theme, className }) => {
    const buttonRef = useRef();


    const [cartPosition, setCartPosition] = useState();
    const container = document.getElementById("popover-container");

    const openCart = () => {
        const {x, y, height} = buttonRef.current.getBoundingClientRect();
        setCartPosition({x: x - 150, y: y + height + 25});
    }

    return (
        <header className={classNames(styles.root, className, 
            theme === "dark" && styles.dark
            )}>
            <div className={classNames(styles.container, styles.headerInner)}>
                <ThemeToggleContainer />
                <h1 className={styles.title}>
                        FoodTime
                </h1>
                <div className={styles.cart}>
                    <CartButton className={styles.buttonMargin} buttonRef={buttonRef} onClick={openCart} />
                    {cartPosition && container && createPortal(
                    <Popover {...cartPosition} onClose={() => setCartPosition(null)}>
                        <CartContainer />
                    </Popover>, container)}
                    <UserButtonsContainer />
                </div>
            </div>
        </header>
    )}