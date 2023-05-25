import React, { useState , useEffect } from 'react'

export default function Products() {
    // const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

   useEffect(()=>{
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log('🔥 받아라~~~~');
        setProducts(data);
    });
    return ()=>{
        console.log('🍧 팥 빙수');
    }
   }, [checked])
    return (
        <>
        <input 
            id='checkbox'
            type='checkbox' 
            value={checked} 
            onChange={handleChange}/>
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

