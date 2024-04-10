/* eslint-disable react/jsx-key */

import classNames from "classnames"
import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"
import styles from './styles.module.scss'
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors"

export const Restaurant = ({restaurantId}) => {

  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  if (!restaurant) return null;

  const {name, menu, reviews} = restaurant;


  return (
    <div className={classNames(styles.root, styles.container)}>
      <h2 className={styles.title2}>{name ? name : "NoName"}</h2>
      

      {!!menu?.length && (
      <div className={styles.menu}>
        <h3 className={styles.title3}>Меню</h3>
        <Menu restaurantId = {restaurantId} />
      </div>)}

      {!!reviews?.length && (
      <div className={styles.reviews}>
        <h3 className={styles.title3}>Отзывы</h3>
          <Reviews restaurantId = {restaurantId} />
      </div>)}

      <br />
    </div>
  )}