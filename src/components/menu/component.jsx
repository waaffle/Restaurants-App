/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"

export const Menu = ({ menu }) =>{
    return <ul>
      {
        menu.map(dish => (
            <li>
              <Dish key={dish.name} name={dish.name} /> 
            </li>
        ))
      }
    </ul>
}