import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { navigate } from "@reach/router";


const PrivateRoutes = (props) => {
  const { children } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        alert('You must be logged in to view this page. CLick the Google button to sign in.');
        navigate('/');
      }
    })
  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default PrivateRoutes;
