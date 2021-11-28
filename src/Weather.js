import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Sunday 12:00pm",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-info w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3 p-1">
          <div className="col-6">
            <div className="clearfix">
              <div className="float-left">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6 text-end">
            <ul>
              <li>Precipitation: 50%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3c20049e4b9dc7307aa7da0d29accbc2";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
