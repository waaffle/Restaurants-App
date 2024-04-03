/* eslint-disable react/jsx-key */

import classNames from "classnames"
import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"
import styles from './styles.module.scss'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export const Restaurant = ({restaurant}) => {
  if (!restaurant) return null;

  const {name, menu, reviews} = restaurant;


  return (
    <div className={classNames(styles.root, styles.container)}>
      <h2 className={styles.title2}>{name ? name : "NoName"}</h2>
      

      {!!menu?.length && (
      <div className={styles.menu}>
        <h3 className={styles.title3}>Меню</h3>
        <Menu menu = {menu} />
      </div>)}

      {!!reviews?.length && (
      <div className={styles.reviews}>
        <h3 className={styles.title3}>Отзывы</h3>
          <Reviews reviews = {reviews} />
      </div>)}

      <br />
    </div>
  )}