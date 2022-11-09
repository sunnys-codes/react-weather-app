import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div class="row">
              <div class="col-6">
                <div class="weather-icon d-inline-flex p-2">
              <WeatherIcon code={props.data.icon} size={52} />
              </div>
              <div class="weather-temperature col-4 float-start inline ">
              <WeatherTemperature fahrenheit={props.data.temperature} /> 
              
              </div>
        </div>
        <div className="weather-climate col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}