import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Filter.module.scss';

const Filter = (props) => {

  const {
         filterParameters
        , setFilterParameters } = props;

  //we want to when cliekd allow the user to toggle the TRUE false of the filter paraneter Array.

  const toggleFilterOnOff = (filtername) => {
    const updatedArray = [];
    filterParameters.map((parameter) => {
      if (parameter.name == filtername) {
        parameter.isFilterActive = !parameter.isFilterActive
        updatedArray.push(parameter)
      }
      else
        updatedArray.push(parameter)
    }
    )
    setFilterParameters(updatedArray);
  }

  const toggleFilterAllOff = () => {
    const updatedArray = [];
    filterParameters.map((parameter) => {
        parameter.isFilterActive = false
        updatedArray.push(parameter)
    }
    )
    setFilterParameters(updatedArray);
  }

  const handleMartiniClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("MartiniGlass");
  };
  const handleClear = (e) => {
    e.stopPropagation();
    toggleFilterAllOff()
  };
  const handleTumblerClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("TumblerGlass");
  };
  const handleWineClick = (e) => {
    e.stopPropagation();
    toggleFilterOnOff("WineGlass");
  };

  const filterOneOn = filterParameters[0].isFilterActive == true ? styles.filterOn : "";
  const filterTwoOn = filterParameters[1].isFilterActive == true ? styles.filterOn : "";
  const filterThreeOn = filterParameters[2].isFilterActive == true ? styles.filterOn : "";

  return (
    <div className={styles.filtermenu}>
      <p>filter:</p>

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
        onClick={handleClear}
      >
        <FontAwesomeIcon icon="times-circle"
        />
      </span>
    </div>
  )
}

export default Filter