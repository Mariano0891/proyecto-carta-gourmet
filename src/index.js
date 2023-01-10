import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxXy_e_Glrxp3TswsGwkJEMT6nbwt-PGw",
  authDomain: "proyecto-carta-gourmet.firebaseapp.com",
  projectId: "proyecto-carta-gourmet",
  storageBucket: "proyecto-carta-gourmet.appspot.com",
  messagingSenderId: "71277733953",
  appId: "1:71277733953:web:bcaa2aa4aaa7d369933ec0"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
