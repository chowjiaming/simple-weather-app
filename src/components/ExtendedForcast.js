import React from "react";

export default function ExtendedForcast({ forcast, error }) {
  return (
    <div className="extended-forcast">
      <p className="day">
        {/* Format datetime from API with slashes instead of hyphens and grab day of week */}
        {new Date(forcast.datetime.replace(/-/g, "/")).toString().split(" ")[0]}
      </p>
      {error ? null : (
        <img
          className="weather-icon-extended"
          src={`https://www.weatherbit.io/static/img/icons/${forcast.weather.icon}.png`}
          alt={`Icon Code ${forcast.weather.icon}`}
        />
      )}
      {error ? (
        <p>Error!!</p>
      ) : (
        <p className="temperature-extended">{forcast.temp}°</p>
      )}
    </div>
  );
}
