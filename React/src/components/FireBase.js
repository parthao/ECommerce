// Import the functions you need from the SDKs you need

import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9waqp9hw19E1O-P83C6hSd2vtuSUaqX4",
  authDomain: "timelesstreasure.firebaseapp.com",
  projectId: "timelesstreasure",
  storageBucket: "timelesstreasure.appspot.com",
  messagingSenderId: "110888735923",
  appId: "1:110888735923:web:298e1b6cd4e8a2a8c78cc6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
