import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('./doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);
  return (
    <div className="our-team-section my-5">
      <div className="container">
        <p className="text-center text-danger fw-bold">// Our Doctors</p>
        <h1 className="text-center text-secondary fw-bold">Meet Our Doctors</h1>
        <div className="row row-cols-md-4 mt-5">
          {
            doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
          }
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;