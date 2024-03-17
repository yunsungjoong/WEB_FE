import { useState, useEffect } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('')
  const cities = ['paris', 'new york', 'tokyo', 'seoul' ]
  const API_key = '20690d0edaf5b7153c40c4608209523a'
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(( position ) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도
      getWeatgerByCurrentLocation(lat,lon)
      console.log('현재위치는?', lat, lon);
    });
  };

  const getWeatgerByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data)
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    let response = await fetch(url)
    let data = await response.json();
    console.log("data", data)
    
  }

  // Api로 현재 위치 가져오기 해보기 
  useEffect(() => { 
    getCurrentLocation();
  }, []); // componentDidMount() []이면 화면에 그리고 나서 바로 실행된다.

  useEffect(() => {
    getWeatherByCity()
  }, [city])
  return (
    // 뭘할지 모르겠다면 스텝바이 스텝으로 정리해둔대로 시작한다.
    // 1. 앱이 실행하면 현재위치 기반의 날씨가 보인다.
    // 2. 날씨정보에는 도시, 섭씨 , 화씨 , 날씨상태
    // 3. 5개의 버튼이 있다 ( 1개는 다른 도시 )
    // 4. 현재위치 버튼을 누르면 현재위치로 돌아간다.
    <>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </>
  );
}


export default App;
