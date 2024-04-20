/* eslint-disable react/jsx-key */

import classNames from "classnames"
import { MenuReviewsTabsContainer } from "../menuReviewsTabs/container"
import styles from './styles.module.scss'

export const Restaurant = ({restaurant}) => {
  
  const {name, menu} = restaurant;
  return (
    <div className={classNames(styles.root, styles.container)}>
      <h2 className={styles.title2}>{name ? name : "NoName"}</h2>
      

      {/* {!!menu?.length && (
      <div className={styles.menu}>
        <h3 className={styles.title3}>Меню</h3>
        <MenuContainer/>
      </div>)} */}

      {!!menu?.length && (
      <MenuReviewsTabsContainer className={styles.tab} restaurant={restaurant}/>)}

      {/* {!!reviews?.length && (
        <div>
          <h3 className={styles.title3}>Отзывы</h3>
          <div className={styles.reviews}>
            <ReviewsContainer restaurantId = {id} />
            <NewReviewForm restaurantId={id}></NewReviewForm>
          </div>
      </div>
      )} */}

      <br />
    </div>
  )}