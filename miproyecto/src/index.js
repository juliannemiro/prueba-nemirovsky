import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCf3QU6IHyIkbpxbcdwi0gEpR1vTB1qnG8",
  authDomain: "jnecommerce-beab3.firebaseapp.com",
  projectId: "jnecommerce-beab3",
  storageBucket: "jnecommerce-beab3.appspot.com",
  messagingSenderId: "741434601583",
  appId: "1:741434601583:web:b8b231c48c4bb1812add9a"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
