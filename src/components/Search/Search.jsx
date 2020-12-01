import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss"

const Search = (props) => {

    const { getApiData, toggleFavoritesOff } = props;

    return (

        <div className={styles.searchBar}>
            <span className={styles.searchIcon}>
                <FontAwesomeIcon icon="search" />
            </span>
            <input
                type="Text" placeholder='Search' onInput={e => getApiData(e.target.value)}>

                </input>
            <button onClick={toggleFavoritesOff} className={styles.searchButton}>
                Search
                </button>
        </div>
    )
}
export default Search;