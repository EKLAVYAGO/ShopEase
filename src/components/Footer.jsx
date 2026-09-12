import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              Shop<span>Ease</span>
            </div>
            <p className="footer-tagline">
              Your modern destination for fashion, electronics, and lifestyle
              products. Quality you can trust, prices you'll love.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">ig</a>
              <a href="#" className="footer-social-link" aria-label="Facebook">fb</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/collection">All Products</Link></li>
              <li><Link to="/collection?category=clothing">Clothing</Link></li>
              <li><Link to="/collection?category=electronics">Electronics</Link></li>
              <li><Link to="/collection?category=footwear">Footwear</Link></li>
              <li><Link to="/collection?category=accessories">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}
