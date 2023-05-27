import React from 'react';
import Profile from './Profile';

export default function Avater({image,isNew}) {
    return (
        <div className='avatar'>
         <img 
            className='photo' src={image} alt="avatar"/>
            {isNew && <span className='new'>New</span>}   
        </div>
    );
}

