import Productcard from "./Productcard";
import Counter from "./Counter";
function Home() {
  const fruits = ["Apple", "Banana", "Orange"];
  const login = true;
  const url = "https://google.com";
  const hero = "https://via.placeholder.com/150";

  const productsdetails = [
    { id: 1, name: "Iphone 17", description: "Mobile phone", price: 80000, available: true },
    { id: 2, name: "Samsung Galaxy", description: "Mobile phone", price: 60000, available: true },
    { id: 3, name: "Iphone 17", description: "Mobile phone", price: 80000, available: true },
    { id: 4, name: "Motorola", description: "Mobile Phone", price: 18000, available: true },
    { id: 5, name: "Sony Camera", description: "Camera", price: 50000, available: false }
  ];

  return (
    <div>
      <p>{login ? "Welcome Back!" : "Please Log In"}</p>
      <h2 style={{ color: "red", fontSize: "60px" }}>Products Store</h2>
      <p className="text">Featured Selection</p>
      <label htmlFor="search-input">Search: </label>
      <input id="search-input" type="text" />
      <br /><br />

      {/* <img src={hero} alt="Hero Banner" /> */}
      <br />
      <a href={url}>Go to link</a>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {productsdetails.map((product) => (
        <Productcard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          available={product.available}
        />
      ))}
      <Counter/>
    </div>
  );
}

export default Home;