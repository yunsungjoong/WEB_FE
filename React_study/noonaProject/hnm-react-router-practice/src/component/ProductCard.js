import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div>
            <img
                className="img-box"
                src={item?.img} 
                alt="Conscious Choice"    
            />
            {item?.choice ? <div>conscious choice</div> : null}
            <div>{item?.title}</div>
            <div>${item?.price}</div>
            {item.new ? <div>신제품</div> : null}
        </div>
    );
};

export default ProductCard;