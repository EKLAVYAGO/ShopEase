import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/Newsletter";

const CATEGORIES = [
  { label: "Clothing", slug: "clothing", icon: "👕" },
  { label: "Electronics", slug: "electronics", icon: "💻" },
  { label: "Footwear", slug: "footwear", icon: "👟" },
  { label: "Accessories", slug: "accessories", icon: "👜" },
];

// Promo countdown — purely for visual effect
function useCountdown() {
  const [time, setTime] = useState({ hours: 5, minutes: 42, seconds: 17 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) { seconds = 59; minutes -= 1; }
        if (minutes < 0) { minutes = 59; hours -= 1; }
        if (hours < 0)   { hours = 0; minutes = 0; seconds = 0; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export default function Home() {
  const countdown = useCountdown();
  const featuredProducts = products.slice(0, 4);
  const latestProducts  = products.slice(4, 12);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-badge">New Season Arrivals ✨</span>
            <h1 className="hero-title">
              Discover Your <em>Perfect</em> Style
            </h1>
            <p className="hero-subtitle">
              Shop the latest trends in fashion, tech, and lifestyle. Curated
              collections, unbeatable prices, and fast delivery — all in one place.
            </p>
            <div className="hero-actions">
              <Link to="/collection" className="btn btn-primary">
                Shop Now →
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Story
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-number">10K+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div>
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Products</div>
              </div>
              <div>
                <div className="hero-stat-number">4.8★</div>
                <div className="hero-stat-label">Avg. Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-image-grid">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80"
              alt="Fashion model"
            />
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80"
              alt="Watch"
            />
          </div>
        </div>
      </section>

      {/* ── Categories ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">Find exactly what you're looking for</p>
          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/collection?category=${cat.slug}`}
                className="category-card"
              >
                <span className="category-icon">{cat.icon}</span>
                <span className="category-label">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ───────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Hand-picked just for you</p>
          <ProductGrid products={featuredProducts} />
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/collection" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Promo Banner ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="promo-banner">
            <div>
              <span className="promo-tag">Limited Time Offer</span>
              <h2 className="promo-title">Up to 40% Off on Electronics</h2>
              <p className="promo-desc">
                Grab our best deals on headphones, keyboards, speakers, and more.
                This sale ends soon — don't miss out.
              </p>
              <Link to="/collection?category=electronics" className="btn btn-primary">
                Shop Electronics
              </Link>
            </div>

            <div>
              <p style={{ color: "#9ca3af", fontSize: 13, marginBottom: 16 }}>
                Offer ends in:
              </p>
              <div className="promo-countdown">
                <div className="promo-time-box">
                  <div className="promo-time-number">
                    {String(countdown.hours).padStart(2, "0")}
                  </div>
                  <div className="promo-time-label">Hours</div>
                </div>
                <div className="promo-time-box">
                  <div className="promo-time-number">
                    {String(countdown.minutes).padStart(2, "0")}
                  </div>
                  <div className="promo-time-label">Mins</div>
                </div>
                <div className="promo-time-box">
                  <div className="promo-time-number">
                    {String(countdown.seconds).padStart(2, "0")}
                  </div>
                  <div className="promo-time-label">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Products ─────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Latest Arrivals</h2>
          <p className="section-subtitle">Fresh styles added this week</p>
          <ProductGrid products={latestProducts} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
