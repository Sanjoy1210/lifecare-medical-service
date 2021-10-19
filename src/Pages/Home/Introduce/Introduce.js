import React from 'react';
import introduceThumb from '../../../images/introduce.jpg';
import './Introduce.css';

const Introduce = () => {
  return (
    <div className="introduce-section my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-start pt-lg-5">
            <h1 className="text-secondary fw-bold mb-4">OUR MEDICAL</h1>
            <h1>We’re Setting the Standards in Research & Clinical Care</h1>
            <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help. Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the USA with over 35 years of quality training and experience.</p>
            <h3 className="pt-3">Special Features</h3>
            <div className="row pb-md-3">
              <div className="col-md-6 lh-lg">
                <ul>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Adult Trauma Center
                  </li>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Birthing and Lactation Classes
                  </li>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Dental and Oral Surgery
                  </li>
                </ul>
              </div>
              <div className="col-md-6 lh-lg">
                <ul>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Children's Trauma Center
                  </li>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Heart and Vascular Institute
                  </li>
                  <li>
                    <i className="far fa-arrow-alt-circle-right me-2"></i>
                    Plastic Surgery
                  </li>
                </ul>
              </div>
            </div>

            <button className="btn btn-warning">Contact us</button>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-5">
            <div className="wrapper">
              <div className="introduce-thumb text-lg-end">
                <img src={introduceThumb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;