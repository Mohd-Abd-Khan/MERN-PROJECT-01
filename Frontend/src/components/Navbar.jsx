import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/feed">MERN Project</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        <li>
          <Link to="/create-post" className="create-btn">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
