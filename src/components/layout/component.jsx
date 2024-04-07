import classNames from "classnames"
import { useCurrentTheme } from "../../contexts/ThemeContext"
import { Footer } from "../footer/component"
import { Header } from "../header/component"
import styles from './styles.module.scss'

export const Layout = ({ children }) => {
    
     const {theme} = useCurrentTheme();
    
    return (
        <div className={classNames(
           (theme === "dark") && styles.dark
        )}>
  
        <Header className={styles.externalHeader}/>
        
            {children}
        
        <Footer className={styles.externalFooter}/>
        
        </div>
)}