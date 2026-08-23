import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  // State for price input
  const [maxPrice, setMaxPrice] = useState("");

  // State for category dropdown
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "iPhone 15", category: "iPhone", price: 75000 },
    { id: 2, name: "iPhone 14", category: "iPhone", price: 60000 },
    { id: 3, name: "Samsung Galaxy S23", category: "Samsung Galaxy", price: 70000 },
    { id: 4, name: "Samsung Galaxy A54", category: "Samsung Galaxy", price: 35000 },
    { id: 5, name: "LG Washing Machine", category: "Washing Machine", price: 30000 },
    { id: 6, name: "Samsung Washing Machine", category: "Washing Machine", price: 55000 },
    { id: 7, name: "iPhone 13", category: "iPhone", price: 48000 },
    { id: 8, name: "Samsung Galaxy Z Fold", category: "Samsung Galaxy", price: 120000 },
    { id: 9, name: "Whirlpool Washing Machine", category: "Washing Machine", price: 25000 },
    { id: 10, name: "iPhone 15 Pro", category: "iPhone", price: 130000 },
    { id: 11, name: "Samsung Galaxy M34", category: "Samsung Galaxy", price: 18000 },
    { id: 12, name: "Bosch Washing Machine", category: "Washing Machine", price: 45000 }
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const priceMatch =
      maxPrice === "" || product.price <= Number(maxPrice);

    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return priceMatch && categoryMatch;
  });

  return (
    <div className="card-box">
      <h2>Products Store</h2>

      {/* Search by Price */}
      <div className="filter-box">
        <input
          type="number"
          placeholder="Enter Maximum Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="iPhone">iPhone</option>
          <option value="Samsung Galaxy">Samsung Galaxy</option>
          <option value="Washing Machine">Washing Machine</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={() => {
            setMaxPrice("");
            setSelectedCategory("All");
          }}
        >
          Reset
        </button>
      </div>

      {/* Product List */}
      <div style={{ marginTop: "15px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))
        ) : (
          <p>No Product Found</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;