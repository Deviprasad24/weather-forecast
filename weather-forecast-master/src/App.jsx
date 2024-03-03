import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Modal from "../components/Modal";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  // bg1: #474E68
  // con1:#607EAA

  return (
    <div className="container mx-[auto] my-[100px] border-transparent border-2 rounded-[30px] w-6/12 bg-[#b7c9e9] shadow-2xl ">
      <h1 className="text-[40px] font-bold mt-10 flex justify-center text-center">
        ⛈️ Weather Forecast ☀️
      </h1>
      <div className="m-8 p-2 flex justify-center gap-3 text-[20px]  ">
        <input
          value={location}
          className="rounded-3xl w-[500px] border-black border-2 bg-transparent text-[25px] indent-2"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div>
        {/* Location name */}
        <div className="location text-3xl p-2 text-center mb-[1.8rem]  ">
          {data.name ? `Location: ${data.name}` : null}
        </div>

        {/* Div1 */}
        <div className="top text-2xl flex justify-between gap-5 m-[0.9rem] ">
          <div className="temp text-center ml-[7rem] ">
            {data.main ? `Temperature: ${data.main.temp.toFixed()}°C` : null}
          </div>
          <div className="description text-center flex mr-[11rem]">
            {data.weather ? `Desc: ${data.weather[0].main} ` : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom text-2xl pb-10 flex gap-5 justify-between ">
            <div className="wind text-center ml-[8rem]">
              {data.wind
                ? `Wind Speed: ${data.wind.speed.toFixed()} KPH`
                : null}
            </div>
            <div className="humidity text-center mr-[10rem]">
              {data.main ? `Humidity: ${data.main.humidity}%` : null}
            </div>
          </div>
        )}
        
        {data.name !== undefined && <Modal />}

        
        
      </div>
    </div>
  );
}

export default App;
