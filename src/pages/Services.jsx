import './Services.css';

function Services() {
  return (
    <div className="services">
      <section className="hero-services">
        <div className="container">
          <h1>Our Premium Services</h1>
          <p>From concept to creation, we offer comprehensive handloom solutions tailored to your unique vision.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="service-item">
            <div className="service-content">
              <h2>Custom Design & Creation</h2>
              <p>Transform your vision into reality with our bespoke handloom design services. Our master craftsmen work closely with you to create unique pieces that reflect your style and heritage.</p>
              <ul>
                <li>Personalized design consultation</li>
                <li>Custom color and pattern selection</li>
                <li>Traditional and contemporary fusion designs</li>
                <li>Quality assurance at every step</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="placeholder-image">Custom Design</div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <h2>Bulk Orders & Wholesale</h2>
              <p>Quality handloom products for retailers, boutiques, and businesses. We ensure consistent quality and timely delivery for all bulk orders.</p>
              <ul>
                <li>Competitive wholesale pricing</li>
                <li>Custom branding options</li>
                <li>Flexible order quantities</li>
                <li>Reliable supply chain</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="placeholder-image">Bulk Orders</div>
            </div>
          </div>

          <div className="service-item">
            <div className="service-content">
              <h2>Textile Restoration</h2>
              <p>Expert restoration of antique and damaged textiles using traditional techniques. Preserve family heirlooms and historical pieces.</p>
              <ul>
                <li>Antique textile restoration</li>
                <li>Color restoration and repair</li>
                <li>Structural reinforcement</li>
                <li>Historical authenticity maintained</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="placeholder-image">Restoration</div>
            </div>
          </div>

          <div className="service-item reverse">
            <div className="service-content">
              <h2>Consultation & Education</h2>
              <p>Learn about handloom textiles through our expert consultation services. Perfect for designers, collectors, and enthusiasts.</p>
              <ul>
                <li>Textile identification and dating</li>
                <li>Care and maintenance advice</li>
                <li>Market value assessment</li>
                <li>Educational workshops</li>
              </ul>
            </div>
            <div className="service-image">
              <div className="placeholder-image">Consultation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;