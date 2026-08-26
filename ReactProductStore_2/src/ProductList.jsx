import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "iPhone",
      price: 75000,
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      available: true,
    },
    {
      id: 2,
      name: "iPhone 14",
      category: "iPhone",
      price: 60000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
      available: true,
    },
    {
      id: 3,
      name: "Samsung Galaxy S23",
      category: "Samsung Galaxy",
      price: 70000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
      available: false,
    },
    {
      id: 4,
      name: "Samsung Galaxy A54",
      category: "Samsung Galaxy",
      price: 35000,
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
      available: true,
    },
    {
      id: 5,
      name: "LG Washing Machine",
      category: "Washing Machine",
      price: 30000,
      image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500",
      available: true,
    },
    {
      id: 6,
      name: "Bosch Washing Machine",
      category: "Washing Machine",
      price: 45000,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500",
      available: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const priceMatch =
      maxPrice === "" || product.price <= Number(maxPrice);

    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return searchMatch && priceMatch && categoryMatch;
  });

  return (
    <div className={darkMode ? "store dark" : "store"}>

      <div className="top-bar">
        <h1>Product Store</h1>

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? " Light " : " Dark "}
        </button>
      </div>

      <p className="subtitle">
        Find your favourite gadgets at the best prices.
      </p>

      <div className="filters">

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="number"
          placeholder="Maximum Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="iPhone">iPhone</option>
          <option value="Samsung Galaxy">Samsung Galaxy</option>
          <option value="Washing Machine">Washing Machine</option>
        </select>

        <button
          className="reset-btn"
          onClick={() => {
            setSearch("");
            setMaxPrice("");
            setSelectedCategory("All");
          }}
        >
          Reset
        </button>
      </div>

      <h3 className="count">
        {filteredProducts.length} Product(s) Found
      </h3>

      <div className="product-grid">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))
        ) : (
          <p>No Product Found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;