export default function About() {
  const values = [
    { icon: "🌍", title: "Sustainable", desc: "We partner only with brands committed to ethical production and eco-friendly packaging." },
    { icon: "💎", title: "Quality First", desc: "Every product is hand-curated by our team. If we wouldn't buy it ourselves, it doesn't make the cut." },
    { icon: "🚚", title: "Fast Delivery", desc: "Free shipping on orders over $100. Most orders arrive within 2–3 business days." },
    { icon: "🔄", title: "Easy Returns", desc: "30-day hassle-free returns. No awkward questions — just a smooth experience from start to finish." },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>We're ShopEase</h1>
          <p>
            Founded in 2022, ShopEase started with a simple mission: make online shopping
            feel personal again. We carefully select products that combine style, function,
            and value — and we're obsessed with the customer experience at every touchpoint.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
          marginBottom: 64,
          textAlign: "center",
        }}>
          {[
            { number: "10K+", label: "Customers served" },
            { number: "500+", label: "Products curated" },
            { number: "4.8★", label: "Average rating" },
            { number: "30+", label: "Brand partners" },
          ].map((stat) => (
            <div key={stat.label} style={{
              padding: "28px 20px",
              background: "var(--bg-light)",
              borderRadius: 12,
              border: "1px solid var(--border)",
            }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "var(--primary)", marginBottom: 4 }}>
                {stat.number}
              </div>
              <div style={{ fontSize: 14, color: "var(--text-light)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="section-title">What We Stand For</h2>
        <p className="section-subtitle">The principles that guide everything we do</p>

        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
