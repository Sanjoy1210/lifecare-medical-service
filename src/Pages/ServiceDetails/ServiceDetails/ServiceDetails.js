import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const [details, setDetails] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const serviceDetail = data.filter((service) => service.id == serviceId);
        setDetails(serviceDetail);
      });
  }, [])

  console.log(details);

  const { title, description, serviceThumb } = details[0] || {};
  return (
    <div>
      <Header />
      <div className="container text-start service-details">
        <div className="card mb-3">
          <img src={serviceThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default ServiceDetails;