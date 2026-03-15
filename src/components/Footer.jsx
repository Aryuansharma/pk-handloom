import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PK Handloom</h3>
            <p>Traditional handwoven textiles with modern elegance.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>123 Handloom Street<br />Mumbai, Maharashtra 400001</p>
            <p>+91 98765 43210</p>
            <p>info@pkhandloom.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 PK Handloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;