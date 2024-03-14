import React, { useState } from 'react';
import "./App.css";
import Box from './component/Box';

const choise = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfwCYFRl_6ibJyaFBkESLGH8YYfuRM50eJA&usqp=CAU"
  },
  scissors: {
    name: "Scissors",
    img: "https://blackbearwow.github.io/image/rockPaperScissors/scissors.png"
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  },
};

const App = () => {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = (userChoice) => {
    const user = choise[userChoice];
    const computer = randomChoice();
    setUserSelect(user);
    setComputerSelect(computer);
    const result = jugement(user, computer);
    setResult(result);
    updateScore(result);
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choise);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choise[final];
  };

  const jugement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  const updateScore = (result) => {
    if (result === "win") {
      setUserScore((prevScore) => prevScore + 1);
    } else if (result === "lose") {
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const resetScore = () => {
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div>
      <h1 className='game-name'>Rock! Scissors! Paper!</h1>
      <div className='score'>
        <h2 className='game-name'>스코어 : {userScore} : {computerScore}</h2>
        
      </div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
        
      </div>
      <div className='reset'>
        <button className='reset-button' onClick={resetScore}>Reset</button>
      </div>
      <div className='btn'>
        <button className='buttons' onClick={() => play("scissors")}>✌️</button>
        <button className='buttons' onClick={() => play("rock")}>✊</button>
        <button className='buttons' onClick={() => play("paper")}>🖐️</button>
      </div>
    </div>
  );
};

export default App;