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
    const [wicon, setWicon] = React.useState(cloud_icon)
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

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " °c";
        location[0].innerHTML = data.name;

        switch (data.weather[0].icon) {
            case "01d":
                setWicon(clear_icon)
                break;
            case "01n":
                setWicon(clear_icon)
                break;
            case "02d":
                setWicon(cloud_icon)
                break
            case "02n":
                setWicon(cloud_icon)
                break;
            case "03d":
                setWicon(drizzle_icon)
                break;
            case "03n":
                setWicon(drizzle_icon)
                break;
            case "04d":
                setWicon(drizzle_icon)
                break;
            case "04n":
                setWicon(drizzle_icon)
                break;
            case "09d":
                setWicon(rain_icon)
                break;
            case "09n":
                setWicon(rain_icon)
                break;
            case "10d":
                setWicon(rain_icon)
                break;
            case "10n":
                setWicon(rain_icon)
                break
            case "13d":
                setWicon(snow_icon)
                break;
            case "13n":
                setWicon(snow_icon)
                break
            default:
                setWicon(clear_icon);
        }

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
                <img src={wicon} alt=""/>
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
        