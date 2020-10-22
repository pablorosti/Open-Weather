import React from 'react'

export const WeatherForm = ({getWeather}) => {
    return (
        <div className='card'>
            <i class="fas fa-cloud-sun"></i>
            <form onSubmit={getWeather}>
                <div>
                    <input type="text" name='city' placeholder='Tu ciudad' autoFocus/>
                </div>
                <div>
                    <input type="text" name='country' placeholder='Tu país'/>
                </div>
                <button className='btn'>Consultar Clima</button>
            </form>
        </div>
    )
}
