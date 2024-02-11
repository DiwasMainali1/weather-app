import React, {useState} from 'react'
import './App.css'

function App() {

    const apiKey = 'c9b819d5b04b0d2997e72985defa1198' 
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key = "Enter") {
            fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}').then(
                response => response.json()
            ).then(
                data=>{
                    setWeatherData(data)
                }
            )
        }
    }
  return (
    <div className="container">
        <input
            className="input" 
            placeholder="Enter City..."
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyDown={getWeather}
            ></input>

    </div>
  )
}

export default App