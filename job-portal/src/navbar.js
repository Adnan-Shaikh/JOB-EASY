import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        JobEasy
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Find Jobs</Link></li>
        <li><Link to="/post-job">Post a Job</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          <Link to="/login" className="navbar-login-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
