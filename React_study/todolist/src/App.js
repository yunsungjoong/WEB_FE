import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';

import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="app">
      <TodoContainer>
        <TodoInsert />
        <TodoList />
      </TodoContainer>
    </div>
  );
}

export default App;
