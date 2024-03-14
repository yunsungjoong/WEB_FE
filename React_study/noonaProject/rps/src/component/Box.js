import React from 'react';

const Box = ( props ) => {
    let result = props.title === "Computer" && props.result !== "tie" && props.result !== ""
        ? props.result === "win" ? "lose" : "win"
        : props.result;
    
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2>{props.item && props.item.name}</h2>
            <img className="item-img" src={props.item && props.item.img} alt=''/>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;