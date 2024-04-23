/* eslint-disable react/jsx-key */

import classNames from "classnames"
import { MenuReviewsTabsContainer } from "../menuReviewsTabs/container"
import styles from './styles.module.scss'

export const Restaurant = ({restaurant}) => {
  
  const {name, menu} = restaurant;
  return (
    <div className={classNames(styles.root, styles.container)}>
      <h2 className={styles.title2}>{name ? name : "NoName"}</h2>

      {!!menu?.length && (
      <MenuReviewsTabsContainer className={styles.tab} restaurant={restaurant}/>)}

      <br />
    </div>
  )}