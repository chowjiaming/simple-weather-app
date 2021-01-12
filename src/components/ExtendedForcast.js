import React from "react";

export default function ExtendedForcast({ forcast, isLoading, error }) {
  let temperatureMessage;
  return (
    <div className="extended-forcast">
      <p className="day">Today</p>
      {!isLoading ? (
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/w/${forcast.weather[0].icon}.png`}
          alt={`Icon Code ${forcast.weather[0].icon}`}
        />
      ) : (
        <p>Loading...</p>
      )}
      {temperatureMessage}
      {!isLoading ? (
        <p className="temperature-extended">{forcast.main.temp}°</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
