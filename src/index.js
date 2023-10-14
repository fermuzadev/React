import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

//ARCHIVO FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyDasaJcKDNAnIeMSzrCYvSh-nfOiF9QgPw",
  authDomain: "dospajarosvolando.firebaseapp.com",
  projectId: "dospajarosvolando",
  storageBucket: "dospajarosvolando.appspot.com",
  messagingSenderId: "626687687387",
  appId: "1:626687687387:web:d6b2d8e60e532a5c276afe",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
