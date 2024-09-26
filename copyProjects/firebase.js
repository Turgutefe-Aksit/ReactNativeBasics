// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh2JPCLkmM-WybqhxuLC-91EzoRdOwytE",
  authDomain: "login-49c79.firebaseapp.com",
  projectId: "login-49c79",
  storageBucket: "login-49c79.appspot.com",
  messagingSenderId: "143431179709",
  appId: "1:143431179709:web:1f74b5440037033d66c6d4"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export {auth}