import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';


function App() {
  const count = useSelector(state=>state.count) // 함수 내부변수로 
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({  type:"INCREMENT", payload :{ num:5 } });
  };
  const login = () => {
    dispatch({  type:"LOGIN", payload:{id:"sungjoong", password:"123" }})
  }

  const decrement = () => {
    dispatch({ type:"DECREMENT"})
  }

  return (
    <div>
      <h1>{id},{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>Login</button>
      
      <Box></Box>
      <GrandSonBox></GrandSonBox>
    </div>
  );
}

export default App;
