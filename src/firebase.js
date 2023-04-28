import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8uIsdi1HJ5w4q5yd-Ymsac7u-6QDCkx4",
  authDomain: "lineclone-a708b.firebaseapp.com",
  projectId: "lineclone-a708b",
  storageBucket: "lineclone-a708b.appspot.com",
  messagingSenderId: "1053026559176",
  appId: "1:1053026559176:web:05b2917acdd47564e7b1fd",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };
