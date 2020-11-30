import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss"

const Search = (props) => {

    const { getApiData } = props;

    return (
        <div className={styles.searchbar}>
            <input 
                type="Text" placeholder='Search' onInput={e => getApiData(e.target.value)}></input>
            <FontAwesomeIcon icon="search" />

        </div>
    )
}
export default Search;