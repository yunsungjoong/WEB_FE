import React from 'react';

interface BoxProps {
    title: string,
    
}



const Box:React.FC<BoxProps> = ({title}) => { 

    return (
        <div className='box'>
            <h1>{title}</h1>
            <img className='item-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-1DfXxhPrB5Q78JoNSZFRD_gJ39pQ2UK7w&usqp=CAU" alt="ㅎㅎ" />
            <h1>Win</h1>
        </div>
    );
};

export default Box;