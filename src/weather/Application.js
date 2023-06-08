import React from "react";
import { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import { getCurrentDate } from "./CurrentDate";
import Loader from "./Loader";

function Application() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState();

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <div className="search flex items-center mt-10 justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={search}
          autoFocus
          placeholder="Search.."
          className="focus:border-none caret-slate-900 text-blue-800 text-xl focus:shadow-none focus:outline-none w-[40%] border-b-2 border-gray-600 px-5 py-2"
        />
      </div>

      {weather ? (
        <div className="w-[70%] mx-auto relative text-black bg-site flex items-center justify-center rounded-xl p-5 h-[70vh] min-h-[560px] mt-5 ">
          <div className="weather-left  flex items-center  flex-col gap-5">
            <p className="lastUpdated text-2xl mb-5 p-2 absolute top-0  text-center ">
              Weather 
            </p>
            <div className=" flex border px-16 py-14 rounded-tr-2xl rounded-tl-xl rounded-bl-2xl shadow-lg shadow-blue-400 items-center justify-evenly flex-col-reverse gap-10 relative">
                <span
                  id="gradus"
                  className="gradus absolute font-semibold mx-auto  text-2xl top-4 left-5 text-blue-400"
                >
                  {Math.floor(weather.main.temp)}
                  <sup>&deg; C</sup>
                </span>
              <div className="relative">
                <h1 className="city text-[40px] text-cyan-600 text-center font-semibold">
                  {weather.name} <sup>{weather.sys.country}</sup>
                </h1>
                <p className="date text-2xl text-blue-400 mt-2"> Date :{getCurrentDate()}</p>
              </div>
              <div className="relative">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="fer"
                  className="w-full h-full"
                />
                <p className="text-2xl text-teal-500 font-medium capitalize">{weather.weather[0].description}</p>
              </div>
            </div>
          </div>
        </div>
      ): <Loader/>}
    </div>
  );
}

export default Application;
