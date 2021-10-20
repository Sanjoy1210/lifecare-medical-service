import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { serviceThumb, title, description, id } = service;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="single-service-item">
        <div className="service-thumb">
          <img src={serviceThumb} className="card-img-top" alt="..." />
        </div>
        <div className="service-body">
          <h5>{title}</h5>
          <p>{description.slice(0, 100)} <i className="fas fa-long-arrow-alt-right ps-2 text-primary"></i></p>
          <Link to={`/servicedetails/${id}`}>
            <button className="btn btn-warning">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;