import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <p>We're here to help! Get in touch with our team for any inquiries or support.</p>
        <section>
          <h2>Contact Information</h2>
          <div>
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>123 Business Street, Tech City, Country</p>
          </div>
        </section>
        <section>
          <h2>Send Us a Message</h2>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}