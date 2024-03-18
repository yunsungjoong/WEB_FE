import React from "react";
import { Button } from 'react-bootstrap'


const WeatherButton = ({ cities , selectedCity, handleCityChange}) => {
    console.log("cities", cities)
    

    
    return (
        <div>
            <Button onClick={()=> handleCityChange("current")}>
                Current Location
            </Button>
            
            {cities.map(( city ) => (
                <Button 
                    variant={`${selectedCity === city ? "outline-warning" : "warning"}`} 
                    onClick={() => handleCityChange(city)}
                >
                    {city}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;