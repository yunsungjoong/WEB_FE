import React, { useState , useEffect } from 'react'

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

   useEffect(()=>{
    fetch('data/products.json')
    .then((res) => res.json())
    .then((data) => {
        console.log('🔥 받아라~~~~');
        setProducts(data);
    });
    return ()=>{
        console.log('🍧 팥 빙수');
    }
   }, [])
    return (
        <>
            <ul>
                {products.map((products) => (
                    <li key={products.id}>
                        <article>
                            <h3>{products.name}</h3>
                            <p>{products.price}</p>
                        </article>
                    </li>
                ))}    
            </ul>  
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>  
        </>
    );
}

