import React from "react";

export default function Today({ forcast, error }) {
  return (
    <div className="today-forcast">
      <p className="date">Today</p>
      {/* Display weather unless error is detected, then display error message*/}
      {error ? null : (
        <img
          className="weather-icon"
          src={`https://www.weatherbit.io/static/img/icons/${forcast.weather.icon}.png`}
          alt={`Icon Code ${forcast.weather.icon}`}
        />
      )}
      <div className="weather-description">
        {error ? (
          <p>Error: </p>
        ) : (
          <p className="temperature">{forcast.temp}°</p>
        )}
        {error ? (
          <p>{error.message}</p>
        ) : (
          <p className="description">{forcast.weather.description}</p>
        )}
      </div>
    </div>
  );
}
