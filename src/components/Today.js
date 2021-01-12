import React from "react";

export default function Today({ forcast, isLoading, error }) {
  return (
    <div className="today-forcast">
      <p className="date">Today</p>
      {/* Display loading while data is fetching */}
      {!isLoading ? (
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/w/${forcast.weather[0].icon}.png`}
          alt={`Icon Code ${forcast.weather[0].icon}`}
        />
      ) : (
        <p>Loading...</p>
      )}
      <div className="weather-description">
        {!isLoading ? (
          <p className="temperature">{forcast.main.temp}°</p>
        ) : (
          <p>Loading...</p>
        )}
        {!isLoading ? (
          <p className="description">{forcast.weather[0].description}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
