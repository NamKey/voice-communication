import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;