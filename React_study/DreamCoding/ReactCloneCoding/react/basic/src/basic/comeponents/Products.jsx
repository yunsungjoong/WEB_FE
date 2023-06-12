import React, { useState, useEffect } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
    // const [count, setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProducts({salesOnly: checked});
    const handleChange = () => setChecked((prev) => !prev);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{error}</p>
        
        return (
        <>
        <input 
            id='checkbox'
            type='checkbox' 
            value={checked} 
            onChange={handleChange}
        />
        <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
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
            {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>   */}
        </>
    );
}  

