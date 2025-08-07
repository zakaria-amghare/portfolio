import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:zakaria.amghare4@gmail.com">zakaria.amghare4@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:0772326216">0772326216</a>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-item">
              <a href="https://www.facebook.com/amghare.zakaria/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </div>
            <div className="social-item">
              <a href="https://github.com/zakaria-amghare" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="social-item">
              <span className="social-label">Discord:</span>
              <span>amgharezakaria</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zakaria Amghare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;