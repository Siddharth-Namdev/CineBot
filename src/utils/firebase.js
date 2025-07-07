// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6kFtrI-9CXg3afmLInjw1bqvFBUzeCKw",
  authDomain: "cinebot-7b9d6.firebaseapp.com",
  projectId: "cinebot-7b9d6",
  storageBucket: "cinebot-7b9d6.firebasestorage.app",
  messagingSenderId: "570548849072",
  appId: "1:570548849072:web:c542c7f9a7058d9677ae75",
  measurementId: "G-EFNCEHP0M5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);