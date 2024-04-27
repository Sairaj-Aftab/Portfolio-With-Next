// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx4JM4ikvyYyPcfl8gJkbQo1OhrhpDnak",
  authDomain: "portfolio-sairaj-aftab.firebaseapp.com",
  projectId: "portfolio-sairaj-aftab",
  storageBucket: "portfolio-sairaj-aftab.appspot.com",
  messagingSenderId: "301937983509",
  appId: "1:301937983509:web:d56ef8d681edbf80350e1c",
  measurementId: "G-EXBTR4WHS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const fireStore = getFirestore(app);
