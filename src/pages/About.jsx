import './About.css';

function About() {
  return (
    <div className="about">
      <section className="hero-about">
        <div className="container">
          <h1>Crafting Heritage That Lasts a Lifetime</h1>
          <p>PK Handloom is India's premier traditional textile brand, dedicated to preserving and promoting the art of handweaving.</p>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2009, PK Handloom began with a simple mission: to keep the ancient art of handweaving alive in the modern world. Our founder, Prakash Kumar, a master weaver from a small village in Rajasthan, recognized that traditional crafts were being lost to industrialization.</p>
              <p>Today, we work with over 50 skilled artisans across India, ensuring that each piece carries the soul of traditional craftsmanship while meeting contemporary standards of quality and design.</p>
            </div>
            <div className="story-image">
              {/* Placeholder for image */}
              <div className="placeholder-image">Artisan at work</div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value">
              <h3>Authenticity</h3>
              <p>Every piece is handwoven using traditional techniques passed down through generations.</p>
            </div>
            <div className="value">
              <h3>Sustainability</h3>
              <p>We use natural dyes and fibers, supporting eco-friendly practices and fair trade.</p>
            </div>
            <div className="value">
              <h3>Quality</h3>
              <p>Rigorous quality control ensures that only the finest pieces reach our customers.</p>
            </div>
            <div className="value">
              <h3>Heritage</h3>
              <p>Preserving India's rich textile heritage while making it accessible to modern audiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;