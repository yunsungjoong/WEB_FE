import { useState } from 'react';
import './App.css';
// import Box from './component/Box'


function App() {
  
  const [ counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1)
  }
  return (
  <div>
    <div>state:{counter}</div>
    <button onClick={increase}>클릭</button>

  </div>
  )
}

export default App;
