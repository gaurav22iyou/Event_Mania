import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="right">
        <h1>EventMania</h1>
      </div>

      <div className={`left ${menuOpen ? 'open' : ''}`}>
        <h4 onClick={() => {
          navigate('/');
          setMenuOpen(!menuOpen)}}>Home</h4>
        <h4 onClick={() => {
          navigate('/about');
          setMenuOpen(!menuOpen)
          }}>About</h4>
        <h4 onClick={() =>{ 
          navigate('/contact');
          setMenuOpen(!menuOpen)
          }}>Contact Us</h4>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
