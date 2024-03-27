import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts =  async() => { 
        let url = `http://localhost:5005/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
        
    };
    useEffect(() => {
        getProducts()
    },[])
    return (
        <div>
            <ProductCard></ProductCard>

        </div>
    );
};

export default ProductAll;