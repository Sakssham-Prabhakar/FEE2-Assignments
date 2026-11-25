import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-thumb"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-meta">Category: {product.category}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-rating">Rating: {product.rating} / 5</p>
      <div className="card-actions">
        <button
          className="secondary-btn"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>
        <button className="primary-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}