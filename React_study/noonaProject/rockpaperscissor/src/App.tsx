import {useState} from 'react';

import Box from './component/Box';
import './App.css';
/* 
1. 박스 2개 (타이틀, 사진, 결과)
2. 가위 바위 보 버튼이 있다.
3. 버튼을 클릭하면 클린한 값이 박스에 보인다.
4. 컴퓨터는 랜덤하게 아이템 선택이 된다. 
5. 3.4 의 결과를 가지고 누가 이겼는지 승패를 따진다. 
6. 승패결과에 따라 테두리 색이 바뀌며 ( 이기거나 지거나 비기면 색상이 재각각 바뀐다.)
*/
const choice = {
  rock: {
    name: "Rock",
    img: "https://velog.velcdn.com/images/gyultang/post/618ab3a0-cff7-4ffb-aafc-1a6a9acfee74/image.png"
  },
  scissors: {
    name: "scissors",
    img: "https://velog.velcdn.com/images/gyultang/post/1d0a9b24-1357-403d-8d4a-9355ee9ccd65/image.png"
  },
  paper: {
    name: "paper",
    img: "https://velog.velcdn.com/images/gyultang/post/0691b6ea-f443-4a0a-ab41-d884031d3b38/image.png"
  },
};

const title = {user:"user" ,computer:"computer"}

function App() {
  
  const play = ( userChoice:string ) => { 
    console.log(userChoice)
  }  

  return ( 
    <>
      <div className='main'>
        <Box title={title.user}/>
        <Box title={title.computer} />
      </div>
      <div className='rps-button'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
