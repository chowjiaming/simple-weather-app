import React from "react";

export default function Navbar({ cityClicked, city }) {
  // handler to set the current city App.js state
  // custom hook will fire when the state changes in App.js
  const handleClick = (e) => {
    cityClicked(e.target.innerHTML);
  };
  // Can modify list of cities here
  let cities = ["Ottawa", "Moscow", "Tokyo"];
  // set active city classname upon re-render
  let cityList = cities.map((cityName) => {
    if (city === cityName) {
      return (
        <li className="active-city" onClick={handleClick}>
          {cityName}
        </li>
      );
    } else {
      return (
        <li className="city" onClick={handleClick}>
          {cityName}
        </li>
      );
    }
  });

  return (
    <ul className="navbar">
      {cityList}
    </ul>
  );
}
