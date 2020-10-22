import React from 'react'

export const WeatherInfo = ({info}) => {
    return (
        <div>
            {
                info.error &&
                <div className='alert-error animate__animated animate__bounce'>{info.error}</div>
            }
            {
                info.temp ? 
                        <div className='info-card animate__animated animate__fadeIn'>
                            <h3>{info.temp} °C</h3>
                            <p>{info.city}, {info.country} </p>
                            <div className='mt-10'>
                                <p>Descripcion: {info.description}</p>
                                <p>Humedad: {info.humidity} % </p>
                                <p>Viento: {info.wind_speed} Km </p>
                            </div>
                            
                        </div>
                        :
                        <div></div>
            }
            
            
        </div>
    )
}
