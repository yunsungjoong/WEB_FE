import React from 'react';
import {FaTrashAlt} from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
    const {text, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status })
    }
    return (<li>
        <input 
            type='checkbox' 
            id='checkbox' 
            checked={status === 'completed'} 
            onChange={handleChange}
            />
            
        <label htmlFor='checkbox'>{text}</label>
        <button>
            <FaTrashAlt />
        </button>
    </li>
    );
}

