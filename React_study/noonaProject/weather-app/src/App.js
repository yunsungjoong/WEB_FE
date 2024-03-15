import { useState, useEffect } from 'react';
import './App.css';

function App() {

  
  const getCurrentLocation = () => {
    //현재 위치 가져오기
    
  
    navigator.geolocation.getCurrentPosition(( position ) => {
      const API_key = '20690d0edaf5b7153c40c4608209523a'
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도
      
      console.log('현재위치', lat, lon);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
      console.log('현재위치 날씨', url)
    });
  }

  // Api로 현재 위치 가져오기 해보기 
  useEffect(() => { 
    getCurrentLocation();
  }, []); // componentDidMount() []이면 화면에 그리고 나서 바로 실행된다.
  return (
    // 뭘할지 모르겠다면 스텝바이 스텝으로 정리해둔대로 시작한다.
    // 1. 앱이 실행하면 현재위치 기반의 날씨가 보인다.
    // 2. 날씨정보에는 도시, 섭씨 , 화씨 , 날씨상태
    // 3. 5개의 버튼이 있다 ( 1개는 다른 도시 )
    // 4. 현재위치 버튼을 누르면 현재위치로 돌아간다.
    <div></div>
  );
}

export default App;
