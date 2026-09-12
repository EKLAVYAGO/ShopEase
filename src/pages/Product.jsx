import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import ProductGrid from "../components/ProductGrid";

// Render filled/empty stars based on a rating number
function StarRating({ rate }) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= Math.round(rate) ? "#f59e0b" : "#d1d5db" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="error-state" style={{ padding: "80px 24px" }}>
        <h3>Product not found</h3>
        <p>This product doesn't exist or may have been removed.</p>
        <Link to="/collection" className="btn btn-primary" style={{ marginTop: 20 }}>
          Back to Collection
        </Link>
      </div>
    );
  }

  // Related: same category, excluding current product
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">›</span>
          <Link to="/collection">Collection</Link>
          <span className="breadcrumb-sep">›</span>
          <span>{product.title}</span>
        </nav>

        {/* Main product section */}
        <div className="product-detail-grid">
          <div className="product-detail-image-box">
            <img src={product.image} alt={product.title} />
          </div>

          <div>
            <p className="product-detail-category">{product.category}</p>
            <h1 className="product-detail-title">{product.title}</h1>

            <div className="product-detail-rating">
              <StarRating rate={product.rating.rate} />
              <span>{product.rating.rate} out of 5</span>
              <span>({product.rating.count} reviews)</span>
            </div>

            <div className="product-detail-price">${product.price.toFixed(2)}</div>

            <p className="product-detail-desc">{product.description}</p>

            {/* Quantity + Add to Cart */}
            <div className="product-detail-actions">
              <div className="quantity-selector">
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <div className="quantity-value">{quantity}</div>
                <button
                  className="quantity-btn"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>

              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                {added ? "✓ Added!" : "Add to Cart"}
              </button>
            </div>

            <div className="product-meta">
              <div className="product-meta-item">
                <span className="product-meta-label">Category</span>
                <span className="product-meta-value">{product.category}</span>
              </div>
              <div className="product-meta-item">
                <span className="product-meta-label">Rating</span>
                <span className="product-meta-value">{product.rating.rate} / 5</span>
              </div>
              <div className="product-meta-item">
                <span className="product-meta-label">In Stock</span>
                <span className="product-meta-value" style={{ color: "#10b981" }}>Yes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="related-products">
            <h2 className="section-title" style={{ textAlign: "left" }}>
              You might also like
            </h2>
            <p className="section-subtitle" style={{ textAlign: "left", marginBottom: 24 }}>
              More from {product.category}
            </p>
            <ProductGrid products={related} />
          </div>
        )}
      </div>
    </div>
  );
}
