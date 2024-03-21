import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null)
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'seoul' ]
  const API_key = '20690d0edaf5b7153c40c4608209523a'
  const [apiError, setAPIError] = useState("");

  const getWeatherByCurrentLocation = async(lat,lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
      const res = await fetch(url);
      const data = await res.json();
      
      setWeather(data);
      setLoading(false);
    } catch (err) {
        setAPIError(err.message);
        setLoading(false);
    }    
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(( position ) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCity = async() => {
    try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);

    }
    
    
  }

  useEffect(() => {
    if(city === null){
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };
  return (
    // 뭘할지 모르겠다면 스텝바이 스텝으로 정리해둔대로 시작한다.
    // 1. 앱이 실행하면 현재위치 기반의 날씨가 보인다.
    // 2. 날씨정보에는 도시, 섭씨 , 화씨 , 날씨상태
    // 3. 5개의 버튼이 있다 ( 1개는 다른 도시 )
    // 4. 현재위치 버튼을 누르면 현재위치로 돌아간다.
    <>
      
      {loading ? ( 
        <div className='container'>
          <ClipLoader color= "f88c6b" loading={loading} size={150}/>
        </div>
      ) : !apiError ? (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton 
            cities={cities}   
            handleCityChange={handleCityChange} 
            selectedCity={city} 
          />
            
        </div>
      ) : (
        apiError
      )}
    </>
  );
}


export default App;
