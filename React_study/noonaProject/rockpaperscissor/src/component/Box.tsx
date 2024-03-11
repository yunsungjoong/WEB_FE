import React from 'react';

interface BoxProps {
    title: string;
    item: {
        name: string;
        img: string;
      } | null; // null을 허용하도록 변경
    result: string;
}

const Box:React.FC<BoxProps> = ({title, item,  result}) => { 
    
    return (
        <div className='box'>
            <h1>{title}</h1>
            {item && ( // null 체크
              <>
                <img className='item-img' src={item.img} alt={item.name} />
                <h1>{result}</h1>
              </>
            )}
            {!item && <p>No selection</p>} {/* 선택이 없을 경우에 대한 처리 */}
        </div>
    );
};

export default Box;