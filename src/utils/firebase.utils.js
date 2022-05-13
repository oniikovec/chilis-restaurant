// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABtS3eSAz9uXXv_-n44vzm10LEtWa-v7g",
  authDomain: "chilis-restaurant.firebaseapp.com",
  projectId: "chilis-restaurant",
  storageBucket: "chilis-restaurant.appspot.com",
  messagingSenderId: "266426418509",
  appId: "1:266426418509:web:e998fbe65ef3abd212a304"
};

// Initialize Firebase
// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export { db }