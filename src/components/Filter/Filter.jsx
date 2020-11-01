import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Filter.module.scss';

const Filter = (props) => {

    const {getApiData, searchResult ,filteredResults, filterParameters, setFilterParameters} = props;

    //we want to when cliekd allow the user to toggle the TRUE false of the filter paraneter Array.

    const toggleFilterOnOff = () => {
        const updatedArray =[];
        filterParameters.map((parameter) => {
            if (parameter.name == "MartiniGlass")
            {
              parameter.toggle = !filterParameters.toggle
              updatedArray.push(parameter)
            }
            else 
            updatedArray.push(parameter)
            }
          )
          setFilterParameters(updatedArray);
          }

    const handleFilterClick = (e) => {
        e.stopPropagation();
        console.log("before" ,filterParameters[0].toggle)
        toggleFilterOnOff();
        console.log("after" ,filterParameters[0].toggle)
      };

    const handleClearClear = (e) => {
        e.stopPropagation();
        getApiData('');
        console.log("clear")

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
             onClick={handleClearClear}
            >
            <FontAwesomeIcon icon="times-circle" 
            />
            </span>
        </div>
    )
}

export default Filter