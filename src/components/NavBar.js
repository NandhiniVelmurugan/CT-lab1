import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShvcsFpRe2e1l6hgYKzoz0XMUeZMD7ONmsCQ&usqp=CAU"
          alt="Your Logo"
        />
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        
        <li><Link to="/quiz">Achievement</Link></li>
      </ul>
      <ul className="nav-links nav-right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
