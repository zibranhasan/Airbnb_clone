// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhkAKVAvPyHZA79Xjz36pB7GyX6PNRFrQ",
  authDomain: "airbnb-524ef.firebaseapp.com",
  projectId: "airbnb-524ef",
  storageBucket: "airbnb-524ef.appspot.com",
  messagingSenderId: "1042853919351",
  appId: "1:1042853919351:web:140118c5f1971ee69a6472",
  measurementId: "G-YVM7QP39N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

