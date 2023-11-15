import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import { useState } from "react";

function WeatherCard({ city }) {
  //
  function updateImg(forecast) {
    switch (forecast) {
      case "Sunny":
        return sunny;
      case "Rainy":
        return rainy;
      case "Cloudy":
        return cloudy;
      case "Partly cloudy":
        return partlyCloudy;
      default:
        return sunny;
    }
  }

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={updateImg(city.forecast)}
          alt={city.forecast}
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{city.city}</h3>
        <h5 className="card-text">{city.temperature}</h5>
        <h5 className="card-text">{city.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard;
