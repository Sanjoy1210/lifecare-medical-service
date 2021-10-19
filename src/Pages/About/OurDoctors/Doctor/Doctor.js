import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
  const { name, role, img } = props.doctor;
  return (
    <div className="col">
      <div className="doctor">
        <div className="doctor-img">
          <img src={img} alt="" className="w-100" />
        </div>
        <div className="doctor-info text-center">
          <h5>{name}</h5>
          <p>{role}</p>
          <div className="icons d-flex justify-content-evenly pt-3">
            <span><i className="fab fa-facebook"></i></span>
            <span><i className="fab fa-twitter"></i></span>
            <span><i className="fab fa-instagram"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;