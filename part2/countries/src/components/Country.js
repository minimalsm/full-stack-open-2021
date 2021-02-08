import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [ weather, setWeather] = useState({})

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
      .then(response => {
        console.log(response)

        setWeather({
        temperature: response.data.current.temperature,
        icon: response.data.current.weather_icons[0],
        windSpeed: response.data.current.wind_speed,
        windDirection: response.data.current.wind_dir
      })
    })
  }, [apiKey, city]);
  
  return (
    <div>
      <h2>Weather in {city}</h2>
      <p><strong>temperature:</strong> {weather.temperature} Celcius</p>
      <img src={weather.icon} alt='Weather Icon'/>
      <p><strong>wind:</strong> {weather.windSpeed} mph, <strong>direction:</strong> {weather.windDirection}</p>
    </div>
  )
}

const Country = ({ country }) => {
  const languages = country.languages
  console.log(languages)
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h3>Languages</h3>
      <ul>
        {languages.map((language) => <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img width={`200`} src={country.flag} alt={`${country.name} flag`}></img>


      <Weather city={country.capital} />
    </div>
  )
}

export default Country