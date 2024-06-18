import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        {/* Logos LinkedIn et Github */}
        <div className="footer__social">
          <div className="footer__social-icons">
            <a
              href="https://github.com/Imi59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Imi59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://github.com/Imi59"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        {/* Navigation */}
        <div className="footer__explore">
          <h1>Navigation</h1>
          <ul>
            <li>
              <a href="#home">Accueil</a>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                A propos
              </Link>
            </li>
            <li>
              <a href="#skills">Mes compétences</a>
            </li>
            <li>
              <a href="#projects">Mes projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2024 BAQUA Imane. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
