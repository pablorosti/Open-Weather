import React,{ useState } from 'react';
import { WeatherInfo } from './components/WeatherInfo';
import { WeatherForm } from './components/WeatherForm';

import axios from 'axios';

function App() {

  const [state, setstate] = useState({
    temp: '', 
    description:'',
    humidity:'',
    wind_speed_:'',
    city:'',
    country:'',
    error:null
  })

  //this function consults the API
  const getWeather = async e =>{
    e.preventDefault();
    const {city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if(cityValue && countryValue){
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=a2c0c740d3102cfe849355b9ca9b438f&units=metric`
      const respuesta = await axios.get(API_URL);
      const {data} = respuesta;
  
      setstate({
        temp: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country, 
        error: null
      })
    }else{
      setstate({error:'Todos los campos son obligatorios'})
    }

  }

  return (
    <div className='container'>
      <WeatherForm getWeather={getWeather}/>
      <WeatherInfo info={state}/>
    </div>
  );
}

export default App;
