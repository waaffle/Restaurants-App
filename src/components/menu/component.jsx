/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"

export const Menu = ({ menu }) =>{
    return <ul>
      {
        menu.map(submenu => (
            <li><Dish name={submenu.name} /></li>
        ))
      }
    </ul>
}