import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요')
    const onClickLeave = () => setMessage('안녕히 가세요!')
    return (
        <div>
            <div onClick={onClickEnter}>입장</div>
            <div onClick={onClickLeave}>퇴장</div>
            <h1>{message}</h1>
        </div>
    );
};
export default Say;