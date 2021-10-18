import React from 'react';
import banner from '../../../images/banner_1.jpg';

const Banner = () => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="banner-thumb">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;