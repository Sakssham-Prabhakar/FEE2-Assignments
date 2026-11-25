import { useCart } from '../context/CartContext';

export default function Cart({ isOpen, onClose }) {
  const { cart, updateQty, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal-box">
      <button className="close-btn" onClick={onClose}>
        Close
      </button>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.title}</strong>
                <p className="cart-sub">
                  ${item.price} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>
              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)}>+</button>
                <button
                  className="remove-btn"
                  onClick={() => updateQty(item.id, -item.qty)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr className="divider" />
          <h3 className="cart-total">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}