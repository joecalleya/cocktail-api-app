import React from "react";
import { Router } from "@reach/router";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes";
import SavedDrinks from "../SavedDrinks";


const Routes = (props) => {

  const {
    searchResults
    , getApiData
    , setSearchResults
    , filterResults
    , filterParameters
    , setFilterParameters

  } = props;

  return (

    <Router>
      <Dashboard path="/"
        getApiData={getApiData}
        searchResults={searchResults}
        filterResults={filterResults}
        setSearchResults={setSearchResults}
        filterParameters={filterParameters}
        setFilterParameters={setFilterParameters}

        />
      <PrivateRoutes path="/">
        <SavedDrinks path="SavedDrinks" />
      </PrivateRoutes>

    </Router>
  );
};

export default Routes;