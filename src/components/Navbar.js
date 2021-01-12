import React from "react";

export default function Navbar({ cityClicked, city }) {
  const handleClick = (e) => {
    cityClicked(e.target.innerHTML);
  };
  let cities = ["Ottawa", "Moscow", "Tokyo"];
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
      {/* <li className="city" onClick={handleClick}>
        Ottawa
      </li>
      <li className="city" onClick={handleClick}>
        Moscow
      </li>
      <li className="city" onClick={handleClick}>
        Tokyo
      </li> */}
      {cityList}
    </ul>
  );
}
