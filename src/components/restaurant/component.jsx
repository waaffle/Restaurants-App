/* eslint-disable react/jsx-key */

import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"

export const Restaurant = ({restaurant}) => {
  if (!restaurant) return null;

  const {name, menu, reviews} = restaurant;

  return (
    <div>
    <h2>{name ? name : "NoName"}</h2>
    

    {!!menu?.length && (<div>
      <h3>Меню</h3>
      <Menu menu = {menu} />
    </div>)}

    {!!reviews?.length && (<div>
      <h3>Отзывы</h3>
      <Reviews reviews = {reviews} />
    </div>)}

    <br />
    </div>
  )}