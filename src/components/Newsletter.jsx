import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <h2 className="newsletter-title">Stay in the Loop</h2>
        <p className="newsletter-subtitle">
          Get exclusive deals, new arrivals, and style inspiration delivered to your inbox.
        </p>

        {submitted ? (
          <p style={{ textAlign: "center", fontWeight: 600, fontSize: 16 }}>
            🎉 You're subscribed! Welcome to the ShopEase family.
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
