import React from "react";
import { Router } from "@reach/router";
import { firestore } from "../../firebase";
import Dashboard from "../Dashboard";
import PrivateRoutes from "../PrivateRoutes";
import SavedDrinks from "../SavedDrinks";


const Routes = (props) => {
  const { drinkRecipie, user } = props;


  return (
    <Router>
      <Dashboard path="/"
      />    
      {/* <PrivateRoutes path="/"> */}
        <SavedDrinks path="/SavedDrinks" />
      {/* </PrivateRoutes> */}
      <NotFound default />
    </Router>
  );
};

export default Routes;
