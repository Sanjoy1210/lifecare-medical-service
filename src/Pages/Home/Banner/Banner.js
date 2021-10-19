import React from 'react';
import banner1 from '../../../images/banner_1.jpg';
import banner2 from '../../../images/banner_2.jpg';
import banner3 from '../../../images/banner_3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-area mb-5">
      {/* <div className="container">
        <div className="banner-thumb">
          <img src={banner} alt="" />
          <h1 className="banner-text">We make Quality HealthCare</h1>
        </div>
      </div> */}

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <h1 className="banner-text fw-bold text-secondary">We make Quality Health Care</h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;