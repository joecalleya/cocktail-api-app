import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";


const SavedDrinks = (props) => {
  console.log(favourites)

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

    const favorites = favourites.length ? 
    favourites.map((item,index) =>
                    <DrinkCard  
                    searchResult={item}
                    key={index}
                    />
                    )     
        : ('no saved')
    return (
        <div>
here are the 😋 dfhndthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhffffffffffffffffffffffffffffffffffffffff
        </div>
    )
}

export default SavedDrinks;