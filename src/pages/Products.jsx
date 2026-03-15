import './Products.css';

function Products() {
  return (
    <div className="products">
      <section className="hero-products">
        <div className="container">
          <h1>Our Handloom Collection</h1>
          <p>Discover our range of traditional handwoven textiles, each piece crafted with care and heritage.</p>
        </div>
      </section>

      <section className="product-categories">
        <div className="container">
          <div className="category-grid">
            <div className="category-card">
              <div className="category-image">
                <div className="placeholder-image">Sarees</div>
              </div>
              <h3>Sarees</h3>
              <p>Elegant handwoven sarees in traditional and contemporary designs.</p>
              <span className="price-range">₹2,500 - ₹15,000</span>
            </div>

            <div className="category-card">
              <div className="category-image">
                <div className="placeholder-image">Dupattas</div>
              </div>
              <h3>Dupattas & Stoles</h3>
              <p>Beautiful woven dupattas and stoles for every occasion.</p>
              <span className="price-range">₹800 - ₹5,000</span>
            </div>

            <div className="category-card">
              <div className="category-image">
                <div className="placeholder-image">Home Decor</div>
              </div>
              <h3>Home Textiles</h3>
              <p>Table runners, cushion covers, and decorative pieces.</p>
              <span className="price-range">₹500 - ₹3,000</span>
            </div>

            <div className="category-card">
              <div className="category-image">
                <div className="placeholder-image">Custom Orders</div>
              </div>
              <h3>Custom Pieces</h3>
              <p>Bespoke creations tailored to your specifications.</p>
              <span className="price-range">Starting ₹5,000</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Banarasi Saree</div>
              </div>
              <h4>Banarasi Silk Saree</h4>
              <p>Traditional Banarasi weave with gold zari work</p>
              <span className="price">₹8,500</span>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Kashmiri Shawl</div>
              </div>
              <h4>Kashmiri Pashmina Shawl</h4>
              <p>Ultra-soft pashmina wool with intricate embroidery</p>
              <span className="price">₹12,000</span>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="placeholder-image">Ikat Dupatta</div>
              </div>
              <h4>Ikat Silk Dupatta</h4>
              <p>Handwoven ikat pattern in rich silk threads</p>
              <span className="price">₹2,200</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;