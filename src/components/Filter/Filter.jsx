import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Filter.module.scss';

const Filter = (props) => {

  const { getApiData
        , filterParameters
        , setFilterParameters } = props;

  //we want to when cliekd allow the user to toggle the TRUE false of the filter paraneter Array.

  const toggleFilterOnOff = (filtername) => {
    const updatedArray = [];
    filterParameters.map((parameter) => {
      if (parameter.name == filtername) {
        parameter.toggle = !parameter.toggle
        updatedArray.push(parameter)
      }
      else
        updatedArray.push(parameter)
    }
    )
    setFilterParameters(updatedArray);
  }
  const handleMartiniClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("MartiniGlass");
  };
  const handleClearClear = (e) => {
    e.stopPropagation();
    getApiData("");
    console.log("clear")
  };
  const handleTumblerClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("TumblerGlass");
  };
  const handleWineClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("WineGlass");
  };

  const filterOneOn = filterParameters[0].toggle == true ? styles.filterOn : "";
  const filterTwoOn = filterParameters[1].toggle == true ? styles.filterOn : "";
  const filterThreeOn = filterParameters[2].toggle == true ? styles.filterOn : "";

  return (
    <div className={styles.filtermenu}>
      <p>filter values:</p>

      <span className={`${filterOneOn}`}
        onClick={handleMartiniClick}
      >
        <FontAwesomeIcon icon="glass-martini-alt"
        />
      </span>
      <span className={filterTwoOn}
        onClick={handleTumblerClick}
      >
        <FontAwesomeIcon icon="glass-whiskey"
        />
      </span>
      <span className={filterThreeOn}
        onClick={handleWineClick}
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