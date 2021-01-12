import React from "react";

export default function ExtendedForcast({ forcast, isLoading, error }) {
  let temperatureContent, iconContent;
  if (isLoading) {
    temperatureContent = <p>Loading...</p>;
    iconContent = <p>Loading...</p>;
  } else if (error) {
    temperatureContent = <p>Error!</p>;
    iconContent = <p>Error!</p>;
  } else {
    temperatureContent = (
      <p className="temperature-extended">{forcast.main.temp}°</p>
    );
    iconContent = (
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/w/${forcast.weather[0].icon}.png`}
        alt={`Icon Code ${forcast.weather[0].icon}`}
      />
    );
  }
  return (
    <div className="extended-forcast">
      <p className="day">Today</p>
      {iconContent}
      {temperatureContent}
    </div>
  );
}
