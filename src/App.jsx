import React, { useState, useContext, useEffect } from "react";
import { UserProvider } from "./context/userContext";
import { CrudProvider } from "./context/crudContext";
import styles from './App.module.scss';
import Routes from './containers/Routes';
import library from "./data/fa-library";
import firebase, { provider } from "./firebase";
import { firestore } from "./firebase";
import SideBar from './components/SideBar';

const App = () => {

  // 1. At the top let's define our variables
  let preFiltered = [];
  let filterResults = [];

  // 2. then let's define the variable we are keeping in state

  const [searchResult, setSearchResult] = useState('');

// set state of filter parms and defult values to false

  const [filterParameters, setFilterParameters] = useState([
    { name: "MartiniGlass", toggle: false, columnUsed: 'strGlass', value: "Cocktail glass" },
    { name: "TumblerGlass", toggle: false, columnUsed: 'strGlass', value: "Highball Glass" },
    { name: "WineGlass", toggle: false, columnUsed: 'strGlass', value: "Wine Glass" }

  ])
  const [user, setUser] = useState(null);

  // 3. Put useEffect here for onload events

  useEffect(() => {
    getApiData("");
  }, []);

  // 3. Put our functions together
  const getApiData = (searchWords) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWords}`)
      .then((res) => res.json())
      .then((res) => {
        const rawData = res.drinks
        setSearchResult(rawData);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const init = () => {
    // 1. If we have a search result, set prefiltered to that search result
    if (searchResult.length >= 1 && preFiltered.length == 0) {
      preFiltered = searchResult
    }

    // 3. Define a filter function for filtring drinks using the filter array 
    filterParameters.forEach(parameter => {
      if (parameter.toggle == true) {
        // This filter is active, let's filter the results by it
        filterResults.push(
          preFiltered.filter(cockTail => cockTail[parameter.columnUsed] && cockTail[parameter.columnUsed] == parameter.value)
        );
      }
    })
    // 4. We have our filtered cocktails, save them in state so the page re-renders
    // if (filterResults.length > 1) setFilteredResults(filterResults)
  }

  init()
  // 5. Our return function comes last with nice indents
  return (
    <>
      <UserProvider>
        <CrudProvider>
        <section className={styles.appContainer}>
          <div className={styles.sideBar}>
            <SideBar
              getApiData={getApiData}
              searchResult={searchResult}
              filterParameters={filterParameters}
              setFilterParameters={setFilterParameters}

            />
          </div>
          <div className="dash">
            <Routes
              getApiData={getApiData}
              searchResult={searchResult}
              filterResults={filterResults}
              setSearchResult={setSearchResult}
            />
          </div>
          <div className={styles.rightbar}>
          </div>
        </section>
    </CrudProvider>
    </UserProvider>
  </>
  );
}

export default App;
