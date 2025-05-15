import { useState } from 'react';
import '../index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <span>RJ</span>
      </a>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <i
        className="fa-solid fa-bars"
        id="menu-icon"
        onClick={toggleMenu}
      ></i>
      <button className="visit-btn">Visit Github</button>
    </header>
  );
};

export default Navbar;
