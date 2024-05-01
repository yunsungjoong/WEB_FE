import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container , Row , Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts =  async () => { 
        let keyword = query.get("q") || "";
        console.log("쿼리값은?",keyword);
        let url = `http://localhost:5005/products?q=${keyword}`;
        console.log("요청된 URL:", url) // url 로그 추가
        let response = await fetch(url);
        let data = await response.json();
        setProducts(data);
        console.log("쿼리 매개변수:", query);
        
        
    };
    useEffect(() => {
        getProducts();
    },[query]);
    return (  
        <Container>
            <Row>
                {products.map((item) => (
                    <Col md={3} sm={12} key={item.id}>
                        <ProductCard item={item} />
                    </Col>    
                ))}
            </Row>
        </Container>
        
    );
};

export default ProductAll;