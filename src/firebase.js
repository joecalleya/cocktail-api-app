import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRflrDGFqTAMew4XiZ5XEa_GAar0aYics",
    authDomain: "cocktail-api-app.firebaseapp.com",
    databaseURL: "https://cocktail-api-app.firebaseio.com",
    projectId: "cocktail-api-app",
    storageBucket: "cocktail-api-app.appspot.com",
    messagingSenderId: "321893042627",
    appId: "1:321893042627:web:425f4d78ac04cba9bc9576"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
