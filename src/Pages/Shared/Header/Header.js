import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">LifeCare</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-start">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Service</a> */}
              <NavLink className="nav-link" to="/service">Service</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Blog</a> */}
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">Login</a> */}
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            Sign in as:
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;