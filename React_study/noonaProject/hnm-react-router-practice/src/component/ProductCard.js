import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)

    }
    return (
        <div className='card' onClick={showDetail}>
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