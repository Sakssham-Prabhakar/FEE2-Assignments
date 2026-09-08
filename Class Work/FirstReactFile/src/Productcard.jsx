// function Productcard({name , }){
//     return{
//         <>
//             <div style={{border: 2px solid red, width:"400px"}}>
//                 <h2>Product Name: Iphone 17</h2>
//                 <p>Product Description: Mobile Phone</p>
//                 <p> Price : 80000</p>
                
//                 <p>Product Description: {description}</p>
//                 <p>Price : {Price}</p>
//                 <p>Available:(available?"Available":"Not Available")</p>
//                 <button>Add to cart</button>
//                 <button>Buy Now</button>

//             </div>
//         </>
//     }
// }

// export default Productcard;
function Productcard({ name, description, price, available }) {
  return (
    <div style={{ border: "2px solid red", width: "400px", padding: "10px", margin: "10px 0" }}>
      <h2>Product Name: {name}</h2>
      <p>Product Description: {description}</p>
      <p>Price: ₹{price}</p>
      <p>Status: {available ? "Available" : "Not Available"}</p>
      <p></p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
    
  );
}

export default Productcard;