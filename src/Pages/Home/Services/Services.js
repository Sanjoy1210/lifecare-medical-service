import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])

  return (
    <div className="services-container">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row g-4">
          {
            services.map(service => <Service key={service.id} service={service} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;