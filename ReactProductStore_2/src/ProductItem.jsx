function ProductItem({
  name,
  category,
  price,
  image,
  available,
}) {
  return (
    <div className="product-card">

      <img src={image} alt={name} />

      <span className="badge">{category}</span>

      <h2>{name}</h2>

      <h3>₹ {price.toLocaleString()}</h3>

      <p className={available ? "stock yes" : "stock no"}>
        {available ? "In Stock" : "Out of Stock"}
      </p>

      <button disabled={!available}>
        {available ? "Buy Now" : "Unavailable"}
      </button>

    </div>
  );
}

export default ProductItem;