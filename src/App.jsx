import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import styles from './App.css';
import Dashboard from './containers/Dashboard';
import library from "./data/fa-library";

let preFiltered  = [];

const App = () => {

  // 1. At the top let's define our variables
  let martiniFilter = false;

  // 2. then let's define the variable we are keeping in state
  const [searchResult , setSearchResult] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // 3. Put useEffect here for onload events
  
  useEffect(() => {
    getApiData("");
  }, []);
  useEffect(() => {
    if (searchResult) init()
  }, [searchResult])

  // 3. Put our functions together
  const getApiData = (searchWords) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWords}`)
      .then ((res) => res.json())
      .then ((res) => {
        const rawData = res.drinks
        setSearchResult(rawData);        
      })
      .catch((err) => {
        console.log(err);
      });
    };

  const toggleFilter = (item) => {
    return item = !item;
  }

  const init = () => {
    // 1. If we have a search result, set prefiltered to that search result
    if (searchResult.length >= 1 && preFiltered.length == 0 ) {
      preFiltered = searchResult
    }

    // 2. Create some filter parameters, to show as checkboxes on the page
    let filterParameters = [{name:"Martini Filter", toggle: true , columnUsed: 'strGlass'  ,  value: "Cocktail glass"}, {name:"Tumbler Filter", toggle: false ,columnUsed: 'strGlass' , value: "Highball Glass"}];

    // 3. Define a filter function for filtring drinks using the filter array 
    const filterResults = [];
    filterParameters.forEach(parameter => {
      if (parameter.toggle == true) {
        // This filter is active, let's filter the results by it
        filterResults.push(
          preFiltered.filter(cockTail => cockTail[parameter.columnUsed] && cockTail[parameter.columnUsed] == parameter.value)
        );
      }
    })

    // 4. We have our filtered cocktails, save them in state so the page re-renders
    setFilteredResults(filterResults);
  }

  // 5. Our return function comes last with nice indents
  return (
   <div className={styles.appContainer}>
      <div className="dash">
          <Dashboard
            getApiData={getApiData}
            searchResult={searchResult}
            filterDrinks={filteredResults}
            toggleFilter={toggleFilter}
            martiniFilter={martiniFilter}
            // clearFilter={clearFilter}
          />
        </div>
    </div>
  );
}

export default App;
