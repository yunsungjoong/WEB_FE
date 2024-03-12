import React from 'react';

const Box = ( props ) => {
    return (
        <div className='box'>
            <h1>{props.title}</h1>
            <img className="item-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZohJyhyZNNMTYOf7_E16KklxhKnoZQYkwLv1pEgmOfesxr5Akzd7ydV2ad-ECgoRhCM&usqp=CAU'/>
            <h2>{props.title}</h2>
{/* 가위  https://blackbearwow.github.io/image/rockPaperScissors/scissors.png */}
{/* 빠 : https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png */}
        </div>
        
    );
};

export default Box;