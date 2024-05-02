import './App.css';
import { useState } from 'react';

function App() {
  const [counte, setCounte] = useState(0)
  const increase = () => {
    setCounte(counte + 1)
  }
  return (
    <div>
      <h1>{counte}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
