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
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://merry-frangipane-77e439.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
