import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Product() {
  const [products,setProducts] = useState([]);
// use effect 3 forms
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(res=>setProducts(res.products));
  },[])
  return (
    <div>
      <h2>Products List</h2>
      <ul>
          {products.map((products)=>{
            return(
              <li>{products.title}</li>
            )
          })}
      </ul>
    </div>
  );
}

export default Product;