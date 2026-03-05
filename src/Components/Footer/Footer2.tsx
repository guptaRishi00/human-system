import { Link } from "react-router";
import "./Footer2.css";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer2">
      {/* CTA Banner */}
      {/* <div className="footer2__cta">
        <div className="footer2__cta-inner">
          <div className="footer2__cta-text">
            <h3>Ready to Transform Your Business?</h3>
            <p>
              Get started today and see the difference our CRM solutions can
              make.
            </p>
          </div>
          <Link to="/contact" className="footer2__cta-btn" aria-label="Get started button">
            Get Started Now
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="footer2__main">
        {/* Brand Column */}
        <div className="footer2__brand">
          <div className="footer2__brand-logo">
            <img src="/assets/img/logo.png" alt="Logo" style={{ maxHeight: '160px', width: 'auto' }} />
          </div>
          <p className="footer2__brand-desc">
            Empowering businesses with intelligent CRM and software solutions
            that drive growth, streamline operations, and deliver exceptional
            results.
          </p>
          <div className="footer2__social">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer2__col">
          <h4 className="footer2__col-title">Quick Links</h4>
          <ul className="footer2__links">
            <li>
              <Link to="/" aria-label="Home page link">Home</Link>
            </li>
            <li>
              <Link to="/about" aria-label="About page link">About Us</Link>
            </li>
            <li>
              <Link to="/service" aria-label="Services page link">Services</Link>
            </li>
            <li>
              <Link to="/project" aria-label="Projects page link">Projects</Link>
            </li>
            <li>
              <Link to="/blog" aria-label="Blog page link">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer2__col">
          <h4 className="footer2__col-title">Resources</h4>
          <ul className="footer2__links">
            <li>
              <Link to="/pricing" aria-label="Pricing page link">Pricing</Link>
            </li>
            <li>
              <Link to="/integrations" aria-label="Integrations page link">Integrations</Link>
            </li>
            <li>
              <Link to="/faq" aria-label="FAQ page link">FAQs</Link>
            </li>
            <li>
              <Link to="/contact" aria-label="Contact page link">Contact</Link>
            </li>
            <li>
              <Link to="/team" aria-label="Team page link">Our Team</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer2__col">
          <h4 className="footer2__col-title">Get in Touch</h4>

          <div className="footer2__contact-item">
            <span className="footer2__contact-icon">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <div>
              <p className="footer2__contact-label">Address</p>
              <p className="footer2__contact-value">
                12 Division Park, SKY<br />12546, Berlin
              </p>
            </div>
          </div>

          <div className="footer2__contact-item">
            <span className="footer2__contact-icon">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <div>
              <p className="footer2__contact-label">Email</p>
              <p className="footer2__contact-value">
                <a href="mailto:help@webteck-mail.com">help@webteck-mail.com</a>
              </p>
            </div>
          </div>

          <div className="footer2__contact-item">
            <span className="footer2__contact-icon">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <div>
              <p className="footer2__contact-label">Phone</p>
              <p className="footer2__contact-value">
                <a href="tel:+215253632156">+(215) 2536-32156</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer2__bottom">
        <p className="footer2__copyright">
          &copy; {currentYear} All rights reserved.
        </p>
        <ul className="footer2__bottom-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer2;
