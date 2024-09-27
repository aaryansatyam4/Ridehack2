import React from 'react';
import './FooterComponent.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>About B.E.A.S.T</h3>
          <p>
            B.E.A.S.T offers comprehensive fitness solutions, including personalized workout plans, dietician consultations, gym memberships, and premium supplements. Our goal is to help you achieve your fitness goals with ease and flexibility.
          </p>
        </div>

        <div className="footer-center">
          <h3>Contact Us</h3>
          <p>
            Email: info@beastfitness.com <br />
            Phone: +91-9876543210
          </p>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#plans">Our Plans</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 B.E.A.S.T Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
