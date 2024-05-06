import React, { useState } from 'react';
import './TodoInsert.scss';
import { useDispatch } from 'react-redux';
import { insert } from '../../modules/todo';

const TodoInsert = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && content !== '') {
      handleInsert(content);
    }
  };

  const handleInsert = (content) => {
    setContent('');
    dispatch(insert(content));
  };

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        value={content}
        placeholder="할 일을 입력하고 Enter를 눌러 저장하세요."
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default TodoInsert;