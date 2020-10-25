import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import styles from './App.css';
import Dashboard from './containers/Dashboard';
import library from "./data/fa-library";

let preFiltered  = [];


const App = () => {

  const [searchResult , setsearchResult] = useState('');
  
  // const [martiniFilterOnOff,setMartiniFilterOnOff] = useState(false);


  let martiniFilter = false;
  let filteredResults = [];

  const getApiData = (searchWords) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWords}`)
      .then ((res) => res.json())
      .then ((res) => {
        const rawData = res.drinks
        setsearchResult(rawData)
        })
        .catch((err) => {
          console.log(err);
        });
    };

      useEffect(() => {
    getApiData("");
  }, []);

    const toggleFilter = (item) => {
      return item = !item;
    }

  // set pre-filtered on first run.

  if (searchResult.length >= 1 && preFiltered.length == 0 ) {preFiltered = searchResult}

   console.log("prefilted rows",preFiltered.length)

// }
// define filter function for filtring drinks types - glass 
const filterDrinks = (type,value,filterOnOrOff) => {
    if (searchResult.length >= 1) {
        if (type == "GLASS" && filterOnOrOff) 
          {
            filteredResults =  preFiltered.filter((drink) => drink.strGlass === value)
            console.log('do filter',filteredResults.length)
          }
        else if (type == "GLASS" && !filterOnOrOff) 
          {
          filteredResults =  preFiltered.filter((drink) => drink.strGlass !== value)
          console.log('Undoo filter',filterOnOrOff,filteredResults.length)

          }
          setsearchResult(filteredResults)
    }

      };

      const clearFilter = () => 
      {
        getApiData("");

      }



 return (
   <div className={styles.appContainer}>
   <div className="dash">
      <Dashboard
      getApiData={getApiData}
      searchResult={searchResult}
      filterDrinks={filterDrinks}
      toggleFilter={toggleFilter}
      martiniFilter={martiniFilter}
      clearFilter={clearFilter}

      />
    </div>

  </div>
  );
}

export default App;
