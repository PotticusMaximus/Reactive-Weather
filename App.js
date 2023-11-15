import React from "react";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Data from "./data";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("London");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {Data.map((city) => (
          <WeatherCard
            city={city} //updateImg={updateImg}
          />
        ))}
      </div>
    </>
  );
}

export default App;
