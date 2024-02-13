import React, { useState } from 'react';
import './Weather.css';
import { FaSearch } from "react-icons/fa";



export const Weather = () => {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    const apiKey = "c9b819d5b04b0d2997e72985defa1198";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
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
                </div>
            </div>
        }
    </div>

  )
}

export default Weather 