import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  const { serviceThumb, title, description } = service;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-service-item">
        <div className="service-thumb">
          <img src={serviceThumb} className="card-img-top" alt="..." />
        </div>
        <div className="service-body">
          <h5>{title}</h5>
          <p>{description.slice(0, 100)} ...</p>
          <button className="btn btn-warning">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;