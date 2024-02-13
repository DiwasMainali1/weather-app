import React, { useState } from 'react';
import './Weather.css';
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {WiHumidity} from 'react-icons/wi';



export const Weather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    const apiKey = "c9b819d5b04b0d2997e72985defa1198";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    function eventHandler(event) {
        setCity(event.target.value);
    }

    async function fetchData() {
        try {
            let response = await fetch(url);
            let output = await response.json();
            if(response.ok) {
                setWeather(output);
                setError('');
                console.log(output);
            } else {
                setWeather(null);
                setError('Enter a valid city name!');
            }
        }
        catch (error) {

        }
    }
  
    return (
    <div className='container'>
        <div className='city'>
            <input type='text' value = {city} onChange={eventHandler} placeholder='Enter a city...'></input>
            <button onClick = {() => fetchData()}>
                <FaSearch></FaSearch>
            </button>   
        </div>
        
        {
            error && <p className='errorMessage'>{error}</p>
        }
        {
            weather && weather.weather && 
            <div className='weatherContent'>
                <div className='weatherImage'>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=''></img>
                    <h3 className='weatherdesc'>{weather.weather[0].description}</h3>

                </div>
                <div className='weatherTemp'>
                    <h2>{weather.main.temp}°C</h2>
                </div>
                <div className='weatherCity'>
                    <div className='location'>
                        <MdLocationOn></MdLocationOn>
                    </div>
                    <p>{weather.name},<span>{weather.sys.country}</span></p>
                    <div className='humidity'>
                        <div className='humidityIcon'>
                            <WiHumidity></WiHumidity>
                        </div>
                        <h3 className='humidityPercent'>{weather.main.humidity}<span>%</span></h3>
                        <h3 className='humidityHeading'>Humidity</h3>
                    </div>
                </div>

                </div>
        }

    </div>

  )
}

export default Weather 