import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import lifeCare from '../../../images/life-care.png';

const Footer = () => {
  return (
    <div className="footer bg-light">
      <div className="container my-5 text-start pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col">
            <div className="logo">
              <img src={lifeCare} alt="" />
              <p>We make Quality HealthCare</p>
            </div>
          </div>
          <div className="col pt-4 pt-md-0">
            <div className="title">
              <h3>Useful Links</h3>
              <hr />
            </div>
            <div className="links">
              <ul>
                <NavLink className="nav-link text-secondary ps-0" to="/home">Home</NavLink>
                <NavLink className="nav-link text-secondary ps-0" to="/about">About us</NavLink>
                <NavLink className="nav-link text-secondary ps-0" to="/blogs">Blogs</NavLink>
                <NavLink className="nav-link text-secondary ps-0" to="/login">Login</NavLink>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="title">
              <h3>Newsletter</h3>
              <hr />
            </div>
            <div className="newsletter-body">
              <p>Sign up with your name and email to get updates fresh updates.</p>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn regular-btn">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col pt-4 pt-md-0">
            <div className="title">
              <h3>Get in Touch</h3>
              <hr />
            </div>
            <div className="contact-details">
              <p>Podcasting operational change management inside of workflows to establish a framework.</p>
              <p><i className="fas fa-map-marker-alt"></i> Medical Ltd, Manhattan 1258,New York, USA Lahore</p>
              <p><i className="fas fa-phone-alt"></i> (+1) 234 567 8901</p>
              <p><i className="far fa-envelope"></i> lifecare@website.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright border-top py-4">
        <div className="container copyright-content">
          <div className="copyright-text">
            <p className="mb-0">&copy; 2021 LifeCare Clinic. DEVELOPED BY Sanjoy Paul.</p>
          </div>
          <div className="social-icons">
            <ul className="icons-list">
              <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-instagram"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-youtube"></i></li>
              <li><i className="fab fa-linkedin"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;