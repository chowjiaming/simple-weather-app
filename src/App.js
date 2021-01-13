import { useState } from "react";
// The css is preprocessed by my package with my development script
import "./App.css";
// My custom fetch API hook
import useFetchWeather from "./helpers/useFetchWeather";
// Import components
import Navbar from "./components/Navbar";
import Today from "./components/Today";
import ExtendedForcast from "./components/ExtendedForcast";
// Import loading spinner
import spinner from "./spinner.gif";

function App() {
  // Set default city to Ottawa when the app starts
  const [city, setCity] = useState("Ottawa");
  // Grabbing app params from my custom hook
  const { forcast, isLoading, error } = useFetchWeather(city);
  if (error) console.log(error);
  return (
    <div className="wrapper">
      {/* Passing the clicked city from the navbar to the app state.
          My custom hook */}
      <Navbar city={city} cityClicked={(clickedCity) => setCity(clickedCity)} />
      <div className="weather-container">
        {/* Display loading when data is being fetched */}
        {isLoading ? (
          <img className="loading-spinner" alt="Loading..." src={spinner} />
        ) : (
          <Today forcast={forcast.data[0]} error={error} />
        )}
        {isLoading
          ? null
          : // Return the rest of 5 day forcast minus the current day
            forcast.data.slice(1).map((dailyForcast, i) => {
              return (
                <ExtendedForcast
                  key={dailyForcast.valid_date}
                  forcast={dailyForcast}
                  position={i}
                  error={error}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
