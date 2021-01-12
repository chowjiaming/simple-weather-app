import { useState } from "react";
// The css is preprocessed by my package with my development script
import "./App.css";
// My custom fetch API hook
import useFetchWeather from "./helpers/useFetchWeather";
import Navbar from "./components/Navbar";
import Today from "./components/Today";
import ExtendedForcast from "./components/ExtendedForcast";

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
      <Navbar cityClicked={(clickedCity) => setCity(clickedCity)} />
      <div className="weather-container">
        <Today forcast={forcast} isLoading={isLoading} error={error} />
        {/* I would use the map function to map through the array
            of returned weather results and pass down only the forcast
            for that specific day of the week if the API provided an 
            extended forcast. */}
        <ExtendedForcast
          forcast={forcast}
          isLoading={isLoading}
          error={error}
        />
        <ExtendedForcast
          forcast={forcast}
          isLoading={isLoading}
          error={error}
        />
        <ExtendedForcast
          forcast={forcast}
          isLoading={isLoading}
          error={error}
        />
        <ExtendedForcast
          forcast={forcast}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
