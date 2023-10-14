// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPmlWu3ttcHqXlutuEARTE6AhqLeI8cBk",
    authDomain: "challange-e42cd.firebaseapp.com",
    projectId: "challange-e42cd",
    storageBucket: "challange-e42cd.appspot.com",
    messagingSenderId: "199584556000",
    appId: "1:199584556000:web:7f35aa73b0d47e1c89c185",
    measurementId: "G-DKEV4XE0CW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };