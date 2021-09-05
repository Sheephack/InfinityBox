// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb50h82TQ5JDJR7wv8_j7hz8V4RuXFhzg",
  authDomain: "infinity-box-643d3.firebaseapp.com",
  projectId: "infinity-box-643d3",
  storageBucket: "infinity-box-643d3.appspot.com",
  messagingSenderId: "137357167592",
  appId: "1:137357167592:web:1350becc082d268b28f25d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);
