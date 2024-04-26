import classNames from "classnames"
import { FooterContainer } from "../footer/container"
import { HeaderContainer } from "../header/container"
import styles from './styles.module.scss'

export const Layout = ({ children, theme }) => {
    
    return (
        <div>
            <div id="popover-container"/>
            <div id="main" className={classNames(
            (theme === "dark") && styles.dark
            )}>
    
                <HeaderContainer className={styles.externalHeader}/>
                    <div className={styles.main}>
                        {children}
                    </div>
                <FooterContainer className={styles.externalFooter}/>
            
            </div>
        </div>
)}