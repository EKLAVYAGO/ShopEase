import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  function handleAddToCart(e) {
    // Stop the click from bubbling up to the card (which navigates)
    e.stopPropagation();
    addToCart(product);
  }

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-card-image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.rating.rate >= 4.5 && (
          <span className="product-card-badge">Top Rated</span>
        )}
      </div>

      <div className="product-card-body">
        <p className="product-card-category">{product.category}</p>
        <h3 className="product-card-title">{product.title}</h3>

        <div className="product-card-footer">
          <span className="product-card-price">${product.price.toFixed(2)}</span>
          <span className="product-card-rating">
            <span className="star-icon">★</span>
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        <button className="product-card-add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
