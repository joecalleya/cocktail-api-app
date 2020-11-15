import React, { useContext } from "react";
import { firestore } from "../../firebase";
import DrinkCard from '../../components/DrinkCard';
import styles from "./SavedDrinks.module.scss";
import { CrudContext } from "../../context/crudContext";


const SavedDrinks = (props) => {

  const crudContext = useContext(CrudContext);
  const { favourites } = crudContext;


  const iteratefavourites = favourites.length ?
    favourites.map((item, index) =>
      <DrinkCard
        searchResults={item}
        key={index}
      />
    )
    : ('Please Search for cocktal')
  return (
    <div>
      {iteratefavourites}
    </div>
  )
}

export default SavedDrinks;