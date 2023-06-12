import React, { useState , useEffect } from 'react'

export default function Products() {
    // const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

   useEffect(()=>{
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then((res) => res.json())
    .then((data) => {
        console.log('🔥뜨근한 데이터를 네트워크에서 받아옴');
        setProducts(data);
    }).catch(e => setError('에러가 발생했음!'))
    .finally(() => setLoading(false));
    return ()=>{
        console.log('🧹 깨긋하게 청소하는 일들을 합니다.');
    }
   }, [checked])

   if(loading) return <p>Loading...</p>
   if(error) return <p>{error}</p>
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

