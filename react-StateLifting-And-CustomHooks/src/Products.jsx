import useFetch from "./hooks/useFetch.js";

function Products() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (loading) {
    return <h1>Loading products...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  
  const productsList = data?.products || [];

  if (productsList.length === 0) {
    return <h1>NO Products</h1>;
  }

  return (
    <div>
      <h1>All Products</h1>
      <ol>
        {productsList.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default Products;


// import useFetch from "./hooks/useFetch";
// function Products(){
//     const {data,loading} = useFetch('https://dummyjson');
//     if(loading){
//             <h1>NO Products</h1>
//         }
//     return(
//         <>
//         <h1> All Products</h1>
//         {loading?"Loading....":""}
//         <ol>
//             {data.map((product)=>{
//                 return(<li>{Products.title}</li>)
//             })}
//         </ol>
        
//         </>
//     )
// }

// export default Products;