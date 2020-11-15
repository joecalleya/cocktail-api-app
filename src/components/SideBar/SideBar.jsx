import React, { useContext } from "react";
import Search from "../Search";
import styles from './Sidebar.module.scss'
import Filter from "../Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import { UserContext } from "../../context/userContext";


const SideBar = (props) => {

  const userContext = useContext(UserContext);
  const { signIn, signOut, user } = userContext;
  const { 
    filteredResults
    , searchResults
    , getApiData
    , filterParameters
    , setFilterParameters
  } = props;

  const getSignInOutJsx = () => {
    return user ? (
      <span className={styles.faStyles}>
        <FontAwesomeIcon icon={"sign-out-alt"} onClick={signOut} />
      </span>
    ) : (
        <span className={styles.faStyles}>
          <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
        </span>
      );
  };

  return (
    <>
      <div className={styles.SideBar}>
        <Link to="/">
          <FontAwesomeIcon icon={["fas", "home"]} />
        </Link>
        <Link to="SavedDrinks">
          <FontAwesomeIcon icon={["fas", "heart"]} />
        </Link>
        {getSignInOutJsx()}
        <Search
          getApiData={getApiData}
        />
        <Filter
          filterParameters={filterParameters}
          searchResults={searchResults}
          filteredResults={filteredResults}
          getApiData={getApiData}
          setFilterParameters={setFilterParameters}

        />
      </div>
    </>
  )
}

export default SideBar;