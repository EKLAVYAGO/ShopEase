import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title" style={{ marginBottom: 32 }}>Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet. Let's fix that!</p>
            <Link to="/collection" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title" style={{ marginBottom: 32 }}>
          Shopping Cart
          <span style={{ fontSize: 16, fontWeight: 400, color: "#6b7280", marginLeft: 12 }}>
            ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)
          </span>
        </h1>

        <div className="cart-layout">
          {/* Cart items list */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-item-info">
                  <p className="cart-item-name">{item.title}</p>
                  <p className="cart-item-category">{item.category}</p>

                  <div className="cart-item-bottom">
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>

                    {/* Quantity controls */}
                    <div className="cart-quantity">
                      <button
                        className="cart-qty-btn"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        −
                      </button>
                      <span className="cart-qty-value">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <span className="cart-item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="cart-summary-box">
            <h2 className="cart-summary-title">Order Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 8 }}>
                Free shipping on orders over $100
              </p>
            )}
            <div className="cart-summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>
            <Link to="/collection" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
