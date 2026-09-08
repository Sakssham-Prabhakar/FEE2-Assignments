import { useState, useEffect } from "react";

function Hooks() {

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const[skip,setSkip] = useState(0);
    const[limit,setLimit] = useState(10);
    function handleClick() {
        setCount(count + 1);
    }
    useEffect(()=>{
        fetch('https://dummyjson.com/products?linit=${limit}&skip=${skip}').then(
            (response) => response.json()).then(
        (data) => setProducts(data.products));
    },[count])
    
    function handleNext(){
        setSkip(skip+10); 
    }
 
    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={handleClick}> ADD </button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}
            </ul>
            <button onClick={handleNext}>Next</button>
        </>

    );
}

export default Hooks;