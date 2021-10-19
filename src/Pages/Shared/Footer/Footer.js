import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer bg-light">
      <div className="container my-5 text-start pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col">
            <div className="logo">
              <h1>LifeCare</h1>
              <p>We make Quality HealthCare</p>
            </div>
          </div>
          <div className="col">
            <div className="title">
              <h3>Useful Links</h3>
              <hr />
            </div>
            <div className="links">
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About us</li>
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
                <button type="submit" className="btn btn-warning">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col">
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