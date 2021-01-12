import React from "react";

export default function Today({ forcast, isLoading, error }) {
  // Content variables to display content based on parameters
  let temperatureContent, iconContent, descriptionContent;
  if (isLoading) {
    temperatureContent = <p>Loading...</p>;
    iconContent = <p>Loading...</p>;
    descriptionContent = <p>Loading</p>;
  } else if (error) {
    temperatureContent = <p>Error!</p>;
    iconContent = <p>Error!</p>;
    descriptionContent = <p>Error</p>;
  } else {
    temperatureContent = <p className="temperature">{forcast.main.temp}°</p>;
    iconContent = (
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/w/${forcast.weather[0].icon}.png`}
        alt={`Icon Code ${forcast.weather[0].icon}`}
      />
    );
    descriptionContent = <p className="temperature">{forcast.main.temp}°</p>;
  }
  return (
    <div className="today-forcast">
      <p className="date">Today</p>
      {/* Display loading while data is fetching */}
      {iconContent}
      <div className="weather-description">
        {temperatureContent}
        {descriptionContent}
      </div>
    </div>
  );
}
