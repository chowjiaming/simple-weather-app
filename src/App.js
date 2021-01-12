import { useState } from "react";
// The css is preprocessed by my package with my development script
import "./App.css";
// My custom fetch API hook
import useFetchWeather from "./helpers/useFetchWeather";

function App() {
  // Set default city to Ottawa when the app starts
  const [city, setCity] = useState("Ottawa");
  // Grabbing app params from my custom hook
  const { forcast, isLoading, error } = useFetchWeather(city);

  console.log(forcast, isLoading, error);
  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
