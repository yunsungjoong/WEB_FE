import React from 'react';

const WeatherBox = ({ weather }) => {
    console.log("웨더?" , weather)
    return (
        <>
            <div className='weather-box'>
                <div>{weather?.name}</div>  { /* weather &&weather.name} */}
                
                <h2>{weather?.main.temp}℃ / {((weather?.main.temp * 9) / 5 + 32).toFixed(2)}℉</h2>
                <h3>{weather?.weather[0].description}</h3>
            </div>
        </>
    );
};

export default WeatherBox;   