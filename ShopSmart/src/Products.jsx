import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

export default function Products({ search, category, sortBy, onViewDetails }) {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  useEffect(() => {
    setSkip(0);
  }, [search, category, sortBy]);

  useEffect(() => {
    setLoading(true);

    let sortQuery = '';
    if (sortBy === 'price-asc') {
      sortQuery = '&sortBy=price&order=asc';
    } else if (sortBy === 'price-desc') {
      sortQuery = '&sortBy=price&order=desc';
    } else if (sortBy === 'rating-desc') {
      sortQuery = '&sortBy=rating&order=desc';
    } else if (sortBy === 'rating-asc') {
      sortQuery = '&sortBy=rating&order=asc';
    }

    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}${sortQuery}`;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
        search
      )}&limit=${limit}&skip=${skip}${sortQuery}`;
    } else if (category) {
      url = `https://dummyjson.com/products/category/${encodeURIComponent(
        category
      )}?limit=${limit}&skip=${skip}${sortQuery}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(data.total || 0);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setTotal(0);
        setLoading(false);
      });
  }, [search, category, sortBy, skip]);

  return (
    <div>
      {loading ? (
        <p className="status-text">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="status-text">No products found.</p>
      ) : (
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}

      <Pagination
        skip={skip}
        limit={limit}
        total={total}
        onPrev={() => setSkip(Math.max(0, skip - limit))}
        onNext={() => setSkip(skip + limit)}
      />
    </div>
  );
}