import React, { useState, useEffect } from "react";
import { UserProvider } from "./context/userContext";
import { CrudProvider } from "./context/crudContext";
import styles from './App.module.scss';
import Routes from './containers/Routes';
import library from "./data/fa-library";
import SideBar from './components/SideBar';

const App = () => {

  //At the top let's define our variables
  let preFilteredResults = [];
  let filterResults = [];
  
  
  //define the variable we are keeping in state

  const [searchResults, setSearchResults] = useState('');
  const [filterParameters, setFilterParameters] = useState([

  // set state of filter parameters and default values to false

    { name: "MartiniGlass", isFilterActive: false, columnUsed: 'glass', value: "Cocktail glass" },
    { name: "TumblerGlass", isFilterActive: false, columnUsed: 'glass', value: "Highball Glass" },
    { name: "WineGlass"   , isFilterActive: false, columnUsed: 'glass', value: "Wine Glass" }

  ])

  //Put useEffect here for onload events

  useEffect(() => {
    getApiData("");
  }, []);
 // Put our functions together

 
  const getIngredients = (drink) => {
    let ingredients = [];
    Object.keys(drink).forEach((key) => {
      if (key.includes("Ingr") && drink[key]) {
        ingredients.push(drink[key]," ");
      }
    });
    return ingredients;
  };

  const cleanRecipeData = (drink) => {
    const cleanedRecipe = {
      id: drink.idDrink,
      name: drink.strDrink,
      category: drink.strCategory,
      instructions: drink.strInstructions,
      thumbnail: drink.strDrinkThumb,
      tags: drink.strTags,
      glass: drink.strGlass,
      ingredients: getIngredients(drink),
      dateCreated: new Date().toUTCString(),
      dateModified: null,
      Video: drink.strVideo,
      isFav: false,
    };
    return cleanedRecipe;
  };
 const getApiData = (searchWords) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchWords}`)
    .then((res) => res.json())
    .then((res) => {
      const rawData = res.drinks.map(cleanRecipeData)
      setSearchResults(rawData);
    })
    .catch((err) => {
      console.log(err);
    });
};
  const init = () => {
    // If we have a search result, set preFilteredResults to that search result so we can switch off the filter
    if (searchResults.length >= 1 && preFilteredResults.length == 0) {
      preFilteredResults = searchResults
    }

    // Define a filter function for filtering drinks using the filter array 
    filterParameters.forEach(parameter => {
      if (parameter.isFilterActive == true) {
        // This filter is active, let's filter the results by it
        filterResults.push(
          preFilteredResults.filter(cockTail => cockTail[parameter.columnUsed] && cockTail[parameter.columnUsed] == parameter.value)
        );
      }
    })
  }

  init()

  return (
    <>
      <UserProvider>
        <CrudProvider>
          <section className={styles.appContainer}>
            <div className={styles.sideBar}>
              <SideBar
                getApiData={getApiData}
                searchResults={searchResults}
                filterParameters={filterParameters}
                setFilterParameters={setFilterParameters}

              />
            </div>
            <div className="dash">
              <Routes
                getApiData={getApiData}
                searchResults={searchResults}
                filterResults={filterResults}
                setSearchResults={setSearchResults}
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
