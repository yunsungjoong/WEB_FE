import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetaillPage = () => {
    const { id } = useParams();
    console.log("ppp", {id});
    return (
        <div>
            <h1>Show Product Detaill {44}</h1>
        </div>
    );
};

export default ProductDetaillPage;