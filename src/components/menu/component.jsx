/* eslint-disable react/jsx-key */
import { SubMenu } from "../submenu/component"

export const Menu = ({ menu }) =>{
    return <ul>
      {
        menu.map(submenu => (
            <li><SubMenu name={submenu.name} /></li>
        ))
      }
    </ul>
}