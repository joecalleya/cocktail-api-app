import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import DrinkCard from '../../components/DrinkCard';
import styles from "./SavedDrinks.module.scss";


const SavedDrinks = (props) => {

  const [favourites, setFavourites] = useState([]);

  const fetchCookbook = () => {
    firestore
      .collection("savedCocktails")
      .get()
      .then((querySnapshot) => {
        const favourites = querySnapshot.docs.map((doc) => doc.data());
        setFavourites(favourites)
        console.log(favourites)
      })
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    fetchCookbook();

  }, [])


  const iteratefavourites = favourites.length ?
    favourites.map((item, index) =>
      <DrinkCard
        searchResult={item}
        key={index}
      // addToSaved={addToSaved}
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