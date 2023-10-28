import React from 'react';
import "./WeatherApp.css"

import search_icon from "../../Assets/search.png"
import clear_icon from "../../Assets/clear.png"
import cloud_icon from "../../Assets/cloud.png"
import drizzle_icon from "../../Assets/drizzle.png"
import humidity_icon from "../../Assets/humidity.png"
import wind_icon from "../../Assets/wind.png"
import snow_icon from "../../Assets/snow.png"
import rain_icon from "../../Assets/rain.png"

const WeatherApp = () => {

    const api_key = "4b2a0fb490c3400ba1278338a743366e"
    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "") {
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=4b2a0fb490c3400ba1278338a743366e`;
        let response = await fetch(url)
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temperature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity;
        console.log(data)
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }
    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={() => {
                    search()
                }}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt=""/>
            </div>
            <div className="weather-temp">24</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">21 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
        