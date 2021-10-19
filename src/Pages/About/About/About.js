import React from 'react';
import aboutThumb from '../../../images/about.jpg';
import aboutImg from '../../../images/about_1.jpg';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import OurDoctors from '../OurDoctors/OurDoctors/OurDoctors';

const About = () => {
  return (
    <div>
      <Header />
      {/* About us img */}
      <div className="about-us text-start">
        <div className="about-us-banner banner d-flex align-items-center justify-content-center">
          <img src={aboutThumb} alt="" />
        </div>
        {/* about us content */}
        <div className="about-us-content my-5">
          <div className="container py-5">
            <h1 className="fw-bold text-secondary text-center mb-4">About Us</h1>
            <div className="row">
              <div className="col-lg-6">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
              <div className="col-lg-6">
                {/* <p className="text-danger fw-bold">// ABOUT US</p> */}
                <h1 className="fw-bold text-secondary">Take Care Your Mental and Physical Health</h1>
                <p>Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience. </p>

                <ul>
                  <li><i className="fas fa-check-double"></i> Best Online Professional Support </li>
                  <li><i className="fas fa-check-double"></i> Get Instant Appointment</li>
                  <li><i className="fas fa-check-double"></i> Take Care benefits heart health.</li>
                  <li><i className="fas fa-check-double"></i> Highly Professional Staff</li>
                  <li><i className="fas fa-check-double"></i> We Have 25 Years Experience</li>
                </ul>

                <button className="btn btn-warning">Discover more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our doctors */}
      <OurDoctors />

      <Footer />
    </div>
  );
};

export default About;