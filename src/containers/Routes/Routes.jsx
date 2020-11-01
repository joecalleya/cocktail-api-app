import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../Dashboard";
// import PrivateRoutes from "../PrivateRoutes";
import SavedDrinks from "../SavedDrinks";


const Routes = (props) => {



  const {filteredResults,searchResult 
    ,getApiData, filterDrinks
    ,setSearchResult,filterResults
    ,signIn
    ,signOut
    ,user
    ,addToSaved
} = props;

  return (

    <Router>
      <Dashboard path="/"
                  getApiData={getApiData}
                  searchResult={searchResult}
                  filterResults={filterResults}
                  setSearchResult={setSearchResult}
                  user={user}
                  signIn={signIn}
                  signOut={signOut}    
                  addToSaved={addToSaved}
      />    

      <SavedDrinks path="SavedDrinks" />
    </Router>
  );
};

export default Routes;