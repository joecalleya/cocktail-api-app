import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = (props) => {

    const [favourites, setFavourites] = useState([]);
    const userContext = useContext(UserContext);

  const fetchSaved = () => {
    firestore
      .collection("savedCocktails")
      .get()
      .then((querySnapshot) => {
        const favourites = querySnapshot.docs.map((doc) => doc.data());
        setFavourites(favourites)
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchSaved();
  }, [])

  const addToSaved = (drink) => {
    firestore
      .collection("savedCocktails")
      .doc()
      .set({ ...drink, uid: userContext.user.uid })
      .then(fetchSaved)
      .catch((err) => console.log(err));
  };


  const removeFromSaved = (drink) => {
    const query = firestore
      .collection("savedCocktails")
      .where("id", "==", drink.id)
      .where("uid", "==", userContext.user.uid);

    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.ref.delete());
      fetchSaved()
    });
  };

  const toggleFav = (drink) => {
    if (userContext.user) {
        drink.isFav = !drink.isFav;
        drink.isFav ? addToSaved(drink) : removeFromSaved(drink);
    } else {
      alert(
        "You must be logged in to edit your cookbook. Please click the google icon to sign in with your gmail account."
      );
    }
  };

  return (
    <CrudContext.Provider value={{ favourites, toggleFav, removeFromSaved, fetchSaved, addToSaved }}>
      {props.children}
    </CrudContext.Provider>
  );
};
