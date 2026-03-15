import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Tradition Meets Elegance</h1>
          <p>Crafting timeless handwoven textiles that tell stories of heritage and craftsmanship.</p>
          <div className="hero-stats">
            <div className="stat">
              <h2>500+</h2>
              <p>Products Crafted</p>
            </div>
            <div className="stat">
              <h2>15+</h2>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h2>200+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h2>50+</h2>
              <p>Artisans</p>
            </div>
          </div>
          <a href="/products" className="cta-button">Explore Our Collection</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <h2>Crafting Heritage That Lasts</h2>
          <p>PK Handloom is India's premier traditional textile brand. With over 15 years of experience, we have created countless beautiful pieces that blend traditional craftsmanship with modern design.</p>
          <a href="/about" className="learn-more">Learn More About Us</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Premium Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Custom Design</h3>
              <p>Create unique pieces tailored to your vision and style.</p>
            </div>
            <div className="service-card">
              <h3>Bulk Orders</h3>
              <p>Quality handloom products for retailers and businesses.</p>
            </div>
            <div className="service-card">
              <h3>Restoration</h3>
              <p>Expert restoration of antique and damaged textiles.</p>
            </div>
            <div className="service-card">
              <h3>Consultation</h3>
              <p>Professional advice on handloom selection and care.</p>
            </div>
          </div>
          <a href="/services" className="view-all">View All Services</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>"PK Handloom transformed our home with beautiful, authentic pieces. The quality and craftsmanship are unmatched."</p>
              <cite>- Priya Sharma, Mumbai</cite>
            </div>
            <div className="testimonial">
              <p>"Exceptional service and attention to detail. Our custom sarees were perfect for the wedding."</p>
              <cite>- Anita Khanna, Delhi</cite>
            </div>
            <div className="testimonial">
              <p>"True artisans creating timeless beauty. We've been loyal customers for years."</p>
              <cite>- Vikram Patel, Bangalore</cite>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;