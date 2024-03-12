import React from 'react';
import Box from './component/Box';


const choise = {
  rock: {
    name:"Rock",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZohJyhyZNNMTYOf7_E16KklxhKnoZQYkwLv1pEgmOfesxr5Akzd7ydV2ad-ECgoRhCM&usqp=CAU"
  },
  scissors: {
    name:"Scissors",
    img:"https://blackbearwow.github.io/image/rockPaperScissors/scissors.png"
  },
  paper: {
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  },
}

const App = () => {
  const play = ( userChioce ) => {
    console.log("선택된 아이들입니다." , userChioce)
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" />
        <Box title="Computer"/>
      </div>
      <div className='rps-button'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>

  );
};

export default App;