import React, { useState } from "react";

interface Response {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

const api = {
  key: "1d4533c92dd6d374b5c71e2707d1f69c",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

export function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<Response>();

  function handleInput(e) {
    if (e.key === "Enter") {
      fetch(`${api.baseUrl}?q=${query}&appid=${api.key}&units=metric&lang=de`)
        .then((res) => res.json())
        .then((result: Response) => {
          setWeather(result);
          setQuery("");
        });
    }
  }

  return (
    <div className={weather && weather?.main.temp > 16 ? "app warm" : "app"}>
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a place…"
            className="search-input"
            onKeyDown={handleInput}
            onChange={(e) => setQuery(e.target.value)}
            defaultValue={query}
          />
        </div>
        {weather ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{new Date().toLocaleDateString()}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.ceil(weather.main.temp)} °C</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </>
        ) : (
          <div>Location not found.</div>
        )}
      </main>
    </div>
  );
}
