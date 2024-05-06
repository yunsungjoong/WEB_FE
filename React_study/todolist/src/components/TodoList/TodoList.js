import React from 'react';
import './TodoList.scss';
import TodoListItem from '../TodoListItem/TodoListItem';
import { useDispatch, useSelector } from 'react-redux';
import { remove, toggle } from '../../modules/todo';
import nothingTodoImage from '../../img/checked.png';


const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleToggle = (id) => {
    dispatch(toggle(id));
  };

  return todos.length ? (
    <ul className="list-container">
      {todos.map(({ id, content, isDone }) => (
        <TodoListItem
          id={id}
          content={content}
          isDone={isDone}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  ) : (
    <div className="img-wrapper">
      <img src={nothingTodoImage} alt="" />
      <p>할 일을 모두 완료했습니다!</p>
    </div>
  );
};

export default TodoList;