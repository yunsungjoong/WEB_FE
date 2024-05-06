import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';


const TodoListItem = ({ id, content, isDone, handleRemove, handleToggle }) => {
  return (
    <li key={id} className="item-container">
      <input
        type="checkbox"
        className="item-checkbox"
        checked={isDone}
        onChange={() => handleToggle(id)}
      />
      <span className="item-content">{content}</span>
      <MdRemoveCircleOutline className="item-remove-button" onClick={() => handleRemove(id)} />
    </li>
  );
};

export default TodoListItem;