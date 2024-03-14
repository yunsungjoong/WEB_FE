import { useState } from 'react';
import "./App.css";
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
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const play = ( userChoice ) => {
    setUserSelect(choise[userChoice])
    let computerChoise = randomChoice()
    setComputerSelect(computerChoise)
    setResult(jugement(choise[userChoice] , computerChoise))
    

  };
  
  const randomChoice = () => {
    let itemArray = Object.keys(choise) // 객체의 key 값만 뽑아 Array로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choise[final]
  };

  const jugement = ( user, computer ) => {
    console.log("user" , user , "computer", computer)

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  
  return (
    <>
      <div className='main-box'>
        <div className='main'>
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/>
        </div>
        <div className='rps-button'>
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>
      </div>
    </>
  );
};

export default App;