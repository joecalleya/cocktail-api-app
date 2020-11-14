import React, { createContext, useEffect, useState } from "react";
import firebase, { provider } from "../firebase";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    console.log('signing in')
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    console.log('signing out')

    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
