import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="contact-page">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 className="section-title" style={{ marginBottom: 8 }}>Get in Touch</h1>
          <p className="section-subtitle">We usually respond within 24 hours.</p>
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info">
            <h2>Let's talk</h2>
            <p>
              Have a question about an order, a product, or just want to say hi? Our
              support team is happy to help you with anything.
            </p>

            {[
              { icon: "📧", label: "Email", value: "hello@shopease.com" },
              { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
              { icon: "📍", label: "Address", value: "123 Commerce St, San Francisco, CA 94102" },
              { icon: "🕐", label: "Hours", value: "Mon–Fri, 9am – 6pm PST" },
            ].map((item) => (
              <div key={item.label} className="contact-info-item">
                <span className="contact-info-icon">{item.icon}</span>
                <div>
                  <p className="contact-info-label">{item.label}</p>
                  <p className="contact-info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="contact-form">
            <h3>Send us a message</h3>

            {submitted ? (
              <div className="auth-success-msg">
                ✓ Thanks for reaching out! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Order question, feedback..."
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
