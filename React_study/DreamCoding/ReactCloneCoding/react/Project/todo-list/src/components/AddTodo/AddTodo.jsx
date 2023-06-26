import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
    const [text , setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지가 리프레쉬 되지 않게끔 함 
        if(text.trim().length === 0) {
            return;
        }
        // trim - 여백을 트림 앞뒤 여백을 없애준다. 그래도 문자열이 비어 있다면 빈값
        onAdd({id: uuidv4(), text, status: 'active'})
        setText('');
    }
    return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input 
        className={styles.input}
            type="text" 
            placeholder='add Todo' 
            value={text} 
            onChange={handleChange}/>
        <button className={styles.button}>Add</button>
    </form>
    )
}

