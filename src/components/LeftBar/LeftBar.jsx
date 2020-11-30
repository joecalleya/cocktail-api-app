import React, { useContext } from "react";
import styles from './LeftBar.module.scss'
import Filter from "../Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import { UserContext } from "../../context/userContext";


const LeftBar = (props) => {

  return (
    <>
      <div className={styles.LeftBar}>
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "home"]} />
        </Link>
        <Link to="SavedDrinks">
          <FontAwesomeIcon icon={["fas", "heart"]} />
        </Link>
       </div>
    </>
  )
}

export default LeftBar;