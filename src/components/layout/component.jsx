import { useContext } from "react"
import { Footer } from "../footer/component"
import { Header } from "../header/component"
import styles from './styles.module.scss'
import { ThemeContext } from "../../contexts/ThemeContext"
import classNames from "classnames"

export const Layout = ({ children }) => {
    const {theme} = useContext(ThemeContext);
    
    return (
        <div className={classNames(
            theme === "dark" && styles.dark
        )}>
  
        <Header className={styles.externalHeader}/>
        
            {children}
        
        <Footer className={styles.externalFooter}/>
        
        </div>
)}