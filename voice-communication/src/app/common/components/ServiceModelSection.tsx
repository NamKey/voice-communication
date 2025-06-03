import React from 'react';
import ServiceModel from './ServiceModel';
import './ServiceModelSection.css';

const ServiceModels = () => {
  const models = [
    {
      icon: '🏢',
      title: 'Implementation Model',
      description: 'Complete system setup with hardware installation and software configuration.',
      features: [
        'Full ownership of system',
        'Customized configuration',
        '24/7 technical support',
      ],
    },
    {
      icon: '🔄',
      title: 'Rental Model',
      description: 'Flexible rental options with full service support and maintenance.',
      features: [
        'Low initial investment',
        'Regular upgrades',
        'Maintenance included',
      ],
    },
    {
      icon: '☁️',
      title: 'Subscription Model',
      description: 'Pay-as-you-go solution with scalable resources and features.',
      features: [
        'Flexible scaling',
        'Latest features',
        'Usage-based billing',
      ],
    },
  ];

  return (
    <div className="container">
      <div className="title">Comprehensive ARS Solutions</div>
      <div className="subtitle">Choose from our flexible service models designed to meet your specific needs</div>
      <div className="service-models">
        {models.map((model, index) => (
          <ServiceModel
            key={index}
            icon={model.icon}
            title={model.title}
            description={model.description}
            features={model.features}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceModels;