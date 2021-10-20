import React from 'react';
import banner1 from '../../../images/banner_1.jpg';
import banner2 from '../../../images/banner_2.jpg';
import banner3 from '../../../images/banner_3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-area mb-5">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner banner-content">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1>Take Care of <br /> <span className="color-text">Your Health</span></h1>
              <p className="text-secondary">Keep clam and save your heart</p>
              <button className="btn regular-btn">More About Clinic</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h1>Find The <span className="color-text">Best Doctor</span> <br /> near By You</h1>
              <p className="text-secondary">We care about your health</p>
              <button className="btn regular-btn">More About Clinic</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..." />
            <div className="carousel-caption second-caption d-md-block">
              <h1>Your Health <br /> Our <span className="color-text">First Priority</span></h1>
              <p className="text-secondary">We Serve better than other</p>
              <button className="btn regular-btn">More About Clinic</button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;