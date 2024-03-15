"use client"; // This directive indicates that we're using this file in a client-side environment.

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../auth-context"; // Adjust the path as needed
import Link from "next/link";


export default function Weather() {
  const [weather, setWeather] = useState(null);
  const { user } = useUserAuth(); // Assume no need for firebaseSignOut directly here unless a logout feature on this page is desired

  // TODO: Implement fetchWeather function to fetch weather data using the OpenWeatherMap API.
  // Read the documentation of the API provider to understand how to handle the returned JSON object.
  const fetchWeather =
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.0460954&lon=-114.065465&appid=186535584c04e2b1546d4a488cf09d19") 
  .then(response => response.json()) ; 

  // TODO: Implement loadWeather function that calls fetchWeather and sets the returned data into the weather state.
  async function loadWeather() {
    setWeather(await fetchWeather); 
  }

  useEffect(() => {
    // TODO: Check if the user is logged in. If yes, call loadWeather to fetch weather data.
    loadWeather();
  }, [user]); // Dependency array ensures this effect runs when the user state changes.

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-blue-100">
      <h1 className="text-2xl font-bold mb-4 text-red-800">
        Weather in Calgary
      </h1>
      {user ? (
        <>
          {/* TODO: Display the weather information if available. Include temperature and weather condition. */}
          {/* Optional: Display additional weather details as needed. */}
          {weather && 
            <>
            <p className="text-lg text-gray-800"><b>Weather condition</b>: {weather.weather[0].description}</p>
            <p className="text-lg text-gray-800"><b>Temperature</b>: {(weather.main.temp - 273.15).toFixed(2)}&deg;C</p>
            <p className="text-lg text-gray-800"><b>Humidity</b>: {weather.main.humidity}%</p>
            <p className="text-lg text-gray-800"><b>Pressure</b>: {weather.main.pressure}hPa</p>
            <p className="text-lg text-gray-800"><b>Windspeed</b>: {weather.wind.speed}meter/sec</p>
            </>
          }
          
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            {/* TODO: If needed, provide a Logout button here or ensure there's a way to navigate back or log out. */}
            <Link href="/">Home</Link>
          </button>
        </>
      ) : (
        <>
          <p>Please log in to see the weather information.</p>
          
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            <Link href="/">
              Home
            </Link>
          </button>
          
        </>
      )}
    </main>
  );
}
