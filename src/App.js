import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
     <div className="App"> 
      <div className="container">
  <Weather defaultCity="New York" />
  <footer>
    This project was coded by Sandra Thermildor and is {" "}
  <a 
    href="https://github.com/sunnys-codes/react-weather-app"
    rel="noopener noreferrer"target="_blank"
  >

  open-sourced on Github
  </a>
  </footer>
  </div>
   </div>
  );
 
 
}


