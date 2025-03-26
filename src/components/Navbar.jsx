import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Sitr<span className="highlight">o</span>n.Design
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about" className="link-1">
            Обо мне
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="link-2">
            Портфолио
          </Link>
        </li>
        <li>
          <Link to="/stages" className="link-3">
            Этапы работы
          </Link>
        </li>
        <li>
          <Link to="/tariffs" className="link-4">
            Тарифы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
