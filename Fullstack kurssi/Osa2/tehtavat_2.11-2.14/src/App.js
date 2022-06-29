import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'

const ShowLanguages = (props) => {
  const languages = [props.value]
  const a = Object.entries(languages[0]).toString()
  const b = a.split(',')
  const c = []

  for (var i=0; i < b.length; i++) {
    if (b[i].length <= 3) {
    }
    else {
      c[i] = b[i]
    }
  }

  return (
    <div>
      {c.map((lang) => (
        <li key={lang.toString()}>{lang}</li>
      ))}
    </div>
  )
}

const Weather = (props) => {
  const [weather, setWeather] = useState([]);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: props.value.country.capital,
      lat: props.value.country.latlng[0],
      lon: props.value.country.latlng[1],
      units: 'metric',
      mode: 'text'
    },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`, 
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };
  
  if (weather.length === 0) {
  axios.request(options).then(function (response) {
    setWeather(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  }

  if (weather.length !== 0) {
    var icon = weather.weather[0].icon
    return (
      <div>
        temperature: {weather.main.temp} celsius <p></p>
        sky: {weather.weather[0].description} <p></p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather icon'></img> <p></p>
        wind: {weather.wind.speed} m/s
      </div>
    )
  }

  else {
    return (
      <div>
        <p></p>
        information is not ready...
      </div>
    )
  }
}

const ShowOnlyOne = (props) => {
  return (
    <div>
        <h1>{props.country.name.common}</h1>
          Capital:    {props.country.capital}<br></br>
          Population: {props.country.population}<br></br>
          Languages: <ul><ShowLanguages value={props.country.languages}/></ul>
          <img src={props.country.flags.png} alt='flag'></img>
          <p></p>weather: <Weather value={props}/>
    </div>
  )
}

const ShowFiltered = (props) => {
  return (
    <div>
      {props.country.name.common}
    </div>
  )
}

const CheckFoundCountries = (props) => {
const [toggleCountry, setToggleCountry] = useState('')

  if (props.value.length > 10) {
    return (
      <div>
          <h2>Too many matches, specify another filter</h2>
      </div>
    )
  }

  else if (props.value.length === 1) {
    return(
      <div>
        {props.value.map((country) => (
        <div key={country.ccn3}>
          <ShowOnlyOne country={country}/>
          </div>
          ))}
      </div>
    )
  }

  else if (toggleCountry !== '') {
    return(
      <div>
          <p><button onClick={() => setToggleCountry('')}><h3>Back to search</h3></button></p>
          <ShowOnlyOne country={toggleCountry}/>
      </div>
    )
  }

  else {
    return (
      <div><h2>filtered countries shows up here:</h2>
      {props.value.map((country) => (
        <div style={{ alignItems: 'center', display: 'flex', flexWrap: 'nowrap'}} key={country.ccn3}>
          <ShowFiltered country={country}/><button onClick={() => setToggleCountry(country)}>show</button>
        </div>
        ))}
    </div>
    )
  }
}

const FindCountry = (props) => {
  const [name, setName] = useState([])
  const [foundCountries, SetFoundCountries] = useState ([])
  
  const filter = (e) => {
  const keyword = e.target.value
  if (keyword !=='') {
    const results = props.value.filter((country) => {
      return country.name.common.toLowerCase().includes(keyword.toLowerCase())
  })
    SetFoundCountries(results)
  }
  else {
    SetFoundCountries([])
  }
  setName(keyword)
}

return (
  <div>
     <h2>Find countries:</h2>
      <input
         type='search'
         value={name}
          onChange={filter}
      />
      <CheckFoundCountries value={foundCountries}/>
  </div>
  )
}

const App = () => {
  const [all, setAll] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAll(response.data)
      })
  }, [])

  return (
    <div>
      <FindCountry value={all}/>
    </div>
  )
}

export default App