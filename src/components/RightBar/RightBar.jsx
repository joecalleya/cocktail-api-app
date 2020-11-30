import React, { useContext } from "react";
import styles from './RightBar.module.scss'
import Filter from "../Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import { UserContext } from "../../context/userContext";


const RightBar = (props) => {

  const userContext = useContext(UserContext);
  const { signIn, signOut, user } = userContext;
  const { 
    filteredResults
    , searchResults
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
      <div className={styles.RightBar}>
      {getSignInOutJsx()}

        <Filter
          filterParameters={filterParameters}
          searchResults={searchResults}
          filteredResults={filteredResults}
          setFilterParameters={setFilterParameters}

        />
      </div>
    </>
  )
}

export default RightBar;