import React, {useState} from 'react'
import './App.css'

function App() {

    const apiKey = 'c9b819d5b04b0d2997e72985defa1198' 
    const [weatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState("")

  return (
    <div className="container">
        <input className="input" placeholder="Enter City..."></input>
    </div>
  )
}

export default App