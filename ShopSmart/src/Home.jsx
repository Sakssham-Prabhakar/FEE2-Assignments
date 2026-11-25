import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Products from './Products';

export default function Home({ onOpenCart, onViewDetails, cartCount }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCategories(data);
        }
      })
      .catch(() => setCategories([]));
  }, []);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <div className="container">
      <Navbar
        onSearch={handleSearch}
        onOpenCart={onOpenCart}
        cartCount={cartCount}
      />
      <Filters
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <Products
        search={search}
        category={category}
        sortBy={sortBy}
        onViewDetails={onViewDetails}
      />
    </div>
  );
}