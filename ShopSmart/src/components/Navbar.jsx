import { useState, useEffect } from 'react';

export default function Navbar({ onSearch, onOpenCart, cartCount }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(text.trim());
    }, 400);
    return () => clearTimeout(timer);
  }, [text, onSearch]);

  return (
    <header className="navbar">
      <h1 className="brand-title">ShopSmart</h1>
      <div className="nav-controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="cart-btn" onClick={onOpenCart}>
          Cart ({cartCount})
        </button>
      </div>
    </header>
  );
}