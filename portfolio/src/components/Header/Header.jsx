import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="brand"> Baqua Imane </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#home" className="nav-link">
              Accueil
            </a>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              A propos
            </Link>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Mes compétences
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Mes projets
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
