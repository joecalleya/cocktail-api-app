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
          Sign in: <FontAwesomeIcon icon={["fab", "google"]} onClick={signIn} />
        </span>
      );
  };

  const message = (user) ? user.displayName : ('Welcome')

  const photo = (user) ? <img src={user.photoURL} alt="profile pic"/>
  : ('')

  return (
    <>
      <div className={styles.RightBar}>
      <div className={styles.displayNamePic}>
        {photo}
      <h1>{message}</h1>
      {getSignInOutJsx()}
      </div>

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