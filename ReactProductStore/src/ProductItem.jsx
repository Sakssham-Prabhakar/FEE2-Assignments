function ProductItem({ name, category, price }) {
  return (
    <div className="product-item">
      <p><strong>{name}</strong></p>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductItem;