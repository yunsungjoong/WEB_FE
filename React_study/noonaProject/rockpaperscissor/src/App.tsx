import React, { useState } from 'react';
import Box from './component/Box'; // Box 컴포넌트 불러오기
import './App.css';

type Choice = {
  rock: {
    name: string;
    img: string;
  };
  scissors: {
    name: string;
    img: string;
  };
  paper: {
    name: string;
    img: string;
  };
};

const choice: Choice = {
  rock: {
    name: 'Rock',
    img:
      'https://velog.velcdn.com/images/gyultang/post/618ab3a0-cff7-4ffb-aafc-1a6a9acfee74/image.png',
  },
  scissors: {
    name: 'scissors',
    img:
      'https://velog.velcdn.com/images/gyultang/post/1d0a9b24-1357-403d-8d4a-9355ee9ccd65/image.png',
  },
  paper: {
    name: 'paper',
    img:
      'https://velog.velcdn.com/images/gyultang/post/0691b6ea-f443-4a0a-ab41-d884031d3b38/image.png',
  },
};

const titles = { user: 'user', computer: 'computer' };

function App() {
  const [userSelect, setUserSelect] = useState<Choice[keyof Choice] | null>(null); // 사용자의 선택 상태와 상태 업데이트 함수
  const [computerSelect, setComputerSelect] = useState<Choice[keyof Choice] | null>(null); // 컴퓨터의 선택 상태와 상태 업데이트 함수
  const [userResult, setUserResult] = useState<string>(''); // 사용자의 결과 상태와 상태 업데이트 함수
  const [computerResult, setComputerResult] = useState<string>(''); // 컴퓨터의 결과 상태와 상태 업데이트 함수

  // 사용자의 선택에 따른 게임 진행 함수
  const play = (userChoice: keyof Choice) => {
    const userChoiceObj = choice[userChoice];
    setUserSelect(userChoiceObj); // 사용자의 선택 상태 업데이트
    const computerChoice = randomChoice(); // 랜덤으로 컴퓨터의 선택 생성
    setComputerSelect(computerChoice); // 컴퓨터의 선택 상태 업데이트
    const result = judgement(userChoiceObj, computerChoice); // 사용자와 컴퓨터의 선택 결과에 따라 승패 결정
    setUserResult(result.userResult); // 사용자의 결과 상태 업데이트
    setComputerResult(result.computerResult); // 컴퓨터의 결과 상태 업데이트
  };

  // 랜덤으로 컴퓨터의 선택 생성하는 함수
  const randomChoice = (): Choice[keyof Choice] => {
    const itemArray = Object.keys(choice) as Array<keyof Choice>;
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  // 사용자와 컴퓨터의 선택 결과에 따라 승패 결정하는 함수
  const judgement = (
    user: Choice[keyof Choice],
    computer: Choice[keyof Choice]
  ): { userResult: string; computerResult: string } => {
    const userChoice = user.name.toLowerCase();
    const computerChoice = computer.name.toLowerCase();

    if (userChoice === computerChoice) {
      return { userResult: 'tie', computerResult: 'tie' }; // 비김
    } else if (userChoice === 'rock') {
      return {
        userResult: computerChoice === 'scissors' ? 'win' : 'lose', // 사용자가 이길 경우
        computerResult: computerChoice === 'scissors' ? 'lose' : 'win', // 컴퓨터가 이길 경우
      };
    } else if (userChoice === 'scissors') {
      return {
        userResult: computerChoice === 'paper' ? 'win' : 'lose', // 사용자가 이길 경우
        computerResult: computerChoice === 'paper' ? 'lose' : 'win', // 컴퓨터가 이길 경우
      };
    } else if (userChoice === 'paper') {
      return {
        userResult: computerChoice === 'rock' ? 'win' : 'lose', // 사용자가 이길 경우
        computerResult: computerChoice === 'rock' ? 'lose' : 'win', // 컴퓨터가 이길 경우
      };
    }

    return { userResult: 'tie', computerResult: 'tie' }; // 기본적으로 비김
  };

  // JSX로 화면 출력
  return (
    <>
      <div className="main">
        <Box title={titles.user} item={userSelect} result={userResult} /> {/* 사용자의 박스 */}
        <Box title={titles.computer} item={computerSelect} result={computerResult} /> {/* 컴퓨터의 박스 */}
      </div>
      <div className="rps-button">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </>
  );
}

export default App; // App 컴포넌트를 내보내기