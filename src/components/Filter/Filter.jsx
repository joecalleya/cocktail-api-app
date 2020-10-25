import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Filter.module.scss';

const Filter = (props) => {

    const {clearFilter, searchResult ,filteredResults, filterDrinks ,toggleFilter ,martiniFilter} = props;

    const [martiniFilterOnOff,setMartiniFilterOnOff] = useState(martiniFilter);

    const handleFilterClick = (e) => {
        e.stopPropagation();
        toggleFilter(martiniFilter);
        setMartiniFilterOnOff(!martiniFilterOnOff)
        filterDrinks("GLASS","Cocktail glass",martiniFilterOnOff)
        console.log("filtered",martiniFilterOnOff,searchResult.length)

        // setFavState(!isFav);
      };

    const handleClearClick = (e) => {
        e.stopPropagation();
        clearFilter();
        console.log("filtered",martiniFilterOnOff)

        // setFavState(!isFav);
      };

    return (
        <div className={styles.filtermenu}>
            <p>select filter value</p>
            <span
             onClick={handleFilterClick}
            >
            <FontAwesomeIcon icon="glass-martini-alt" 
            />
            </span>            
            <span
             onClick={handleFilterClick}
            >
            <FontAwesomeIcon icon="glass-whiskey"
            />
            </span>
            <span
             onClick={handleFilterClick}
            >
            <FontAwesomeIcon icon="wine-glass"
            />
            </span>          
            <span
             onClick={clearFilter}
            >
            <FontAwesomeIcon icon="times-circle" 
            />
            </span>
        </div>
    )
}

export default Filter