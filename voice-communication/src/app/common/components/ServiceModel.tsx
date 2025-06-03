import React from 'react';
import './ServiceModel.css';

interface ServiceModelProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceModel: React.FC<ServiceModelProps> = ({ icon, title, description, features }) => {
  return (
    <div className="service-model">
      <div className="service-model-icon">{icon}</div>
      <div className="service-model-title">{title}</div>
      <div className="service-model-description">{description}</div>
      <ul className="service-model-features">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceModel;