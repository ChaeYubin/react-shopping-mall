// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtqAJoOWHjaFfLg0KHn_LyEG27aTLk6NM",
  authDomain: "react-shopping-mall-yubin.firebaseapp.com",
  projectId: "react-shopping-mall-yubin",
  storageBucket: "react-shopping-mall-yubin.appspot.com",
  messagingSenderId: "83505298525",
  appId: "1:83505298525:web:ea207d5dac16669a22e1b4",
};

// Initialize Firebase
const authService = initializeApp(firebaseConfig);

export default authService;
