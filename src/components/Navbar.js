import React from "react";

export default function Navbar({ cityClicked }) {
  const handleClick = (e) => {
    cityClicked(e.target.innerHTML);
  };
  return (
    <ul className="navbar">
      <li className="city" onClick={handleClick}>Ottawa</li>
      <li className="city" onClick={handleClick}>Moscow</li>
      <li className="city" onClick={handleClick}>Tokyo</li>
    </ul>
  );
}
