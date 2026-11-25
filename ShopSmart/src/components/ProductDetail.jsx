import { useCart } from '../context/CartContext';

export default function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="modal-box">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>Product Details</h2>
      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.title}
          className="detail-img"
        />
      )}
      <h3>{product.title}</h3>
      <p>
        <strong>Brand:</strong> {product.brand || 'N/A'}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} / 5
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>
      <p>
        <strong>Warranty:</strong> {product.warrantyInformation || 'N/A'}
      </p>
      <button className="primary-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}