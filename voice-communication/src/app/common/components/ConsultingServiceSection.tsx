import React from 'react';
import ServiceCard from './ServiceCard';
import './ConsultingServiceSection.css';

const ConsultingServiceSection = () => {
  return (
    <div className="service-model-section">
      <h2>Professional Consulting Services</h2>
      <p>Expert guidance from hardware setup to software optimization</p>
      <div className="service-cards">
        <ServiceCard
          icon="🖥️"
          title="Hardware Setup"
          description="Expert guidance on hardware configuration and optimization for maximum performance."
        />
        <ServiceCard
          icon="💻"
          title="Software Integration"
          description="Seamless integration with existing systems and custom software solutions."
        />
        <ServiceCard
          icon="📈"
          title="Performance Analysis"
          description="Detailed system analysis and optimization recommendations."
        />
      </div>
    </div>
  );
};

export default ConsultingServiceSection;