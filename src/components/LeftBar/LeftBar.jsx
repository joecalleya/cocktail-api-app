import React, { useContext } from "react";
import styles from './LeftBar.module.scss'
import Filter from "../Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftBar = (props) => {

  const { isFavorite,toggleFavoritesView} = props;


  const handleClick = (e) => {
    toggleFavoritesView()
    e.preventDefault()
  }

  const heartIcon = isFavorite ? styles.fontAwesomeFavorite : styles.fontAwesome;


  return (
    <>
      <div className={styles.LeftBar}>
        <h1>Favorite's</h1>
        <span className={`${heartIcon}`} onClick={handleClick}>
        <FontAwesomeIcon icon={["fas", "heart"]} />
        </span>
       </div>
    </>
  )
}

export default LeftBar;