/* eslint-disable react/jsx-key */

import classNames from "classnames"
import { MenuContainer } from "../menu/container"
import { ReviewsContainer } from "../reviews/container"
import styles from './styles.module.scss'
import { NewReviewForm } from "../newReviewForm/component"

export const Restaurant = ({restaurant}) => {
  
  const {name, menu, reviews, id} = restaurant;
  return (
    <div className={classNames(styles.root, styles.container)}>
      <h2 className={styles.title2}>{name ? name : "NoName"}</h2>
      

      {!!menu?.length && (
      <div className={styles.menu}>
        <h3 className={styles.title3}>Меню</h3>
        <MenuContainer restaurantId = {id} />
      </div>)}

      {!!reviews?.length && (
        <div>
          <h3 className={styles.title3}>Отзывы</h3>
          <div className={styles.reviews}>
            <ReviewsContainer restaurantId = {id} />
            <NewReviewForm restaurantId={id}></NewReviewForm>
          </div>
      </div>
      )}

      <br />
    </div>
  )}