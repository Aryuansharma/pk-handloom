import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <section className="hero-contact">
        <div className="container">
          <h1>Ready to Create Something Beautiful?</h1>
          <p>Contact us today for custom orders, consultations, or to learn more about our handloom collection.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="info-item">
                <h3>Address</h3>
                <p>123 Handloom Street<br />
                Premium Tower, Mumbai<br />
                Maharashtra 400001, India</p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="info-item">
                <h3>Email</h3>
                <p>info@pkhandloom.com</p>
              </div>
              <div className="info-item">
                <h3>Business Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;