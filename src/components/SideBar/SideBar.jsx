import React from 'react';
import Search from "../Search";
import styles from './Sidebar.module.scss'
import Filter from "../Filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";

const SideBar = (props) => {

    const {clearFilter, filteredResults,searchResult 
        ,getApiData, filterDrinks
        ,toggleFilter,martiniFilter
        ,signIn
        ,signOut
        ,user
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
            {getSignInOutJsx()}
            <Link to="SavedDrinks">
            <FontAwesomeIcon icon={["far", "heart"]} />
            </Link>
            <Search
            getApiData={getApiData}
            searchResult={searchResult}
            />
            <Filter 
            filterDrinks={filterDrinks}
            searchResult={searchResult}
            toggleFilter={toggleFilter}
            filteredResults={filteredResults}
            martiniFilter={martiniFilter}
            clearFilter={clearFilter}
            />


        </div>
    </>
)
}

export default SideBar;