import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {

    const { getApiData } = props;

    return (
        <div>
            <input
                type="Text" placeholder='Search' onInput={e => getApiData(e.target.value)}></input>
            <FontAwesomeIcon icon="search" />

        </div>
    )
}
export default Search;