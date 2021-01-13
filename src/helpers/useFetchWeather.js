import { useReducer, useEffect } from "react";
// grab API key from .env file locally or env params from netlify
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// Actions for fetching and receiving data
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    // Set loading to true and clearing previous forcast data on data request
    case ACTIONS.MAKE_REQUEST:
      return { isLoading: true, forcast: {} };
    // Loading forcast into state and setting loading to false
    case ACTIONS.GET_DATA:
      return { isLoading: false, forcast: action.payload };
    case ACTIONS.ERROR:
      return {
        isLoading: false,
        error: action.payload.error,
        forcast: {},
      };
    default:
      return state;
  }
}

export default function useFetchWeather(city) {
  const [state, dispatch] = useReducer(reducer, {
    forcast: {},
    isLoading: true,
  });

  useEffect(() => {
    const fetchNewData = () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: data,
          });
        })
        .catch((error) => {
          dispatch({ type: ACTIONS.ERROR, payload: { error } });
        });
    };
    fetchNewData();
    // fire hook when state in App.js changes
  }, [city]);
  // return parameters in state
  return state;
}