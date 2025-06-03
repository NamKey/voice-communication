// voice-communication/src/app/common/components/CertificationSection.tsx

import React from 'react';
import CertificationCard from './CertificationCard';
import './CertificationSection.css';

const CertificationSection: React.FC = () => {
  const certifications = [
    { imageSrc: 'path/to/image1.png', title: 'GS Certified', description: 'Quality Assured' },
    { imageSrc: 'path/to/image2.png', title: 'Fax Certified', description: 'Communication Standard' },
    { imageSrc: 'path/to/image3.png', title: 'Test Reports', description: 'Verified Performance' },
    { imageSrc: 'path/to/image4.png', title: 'Procurement Registered', description: 'Government Approved' },
  ];

  return (
    <div className="certification-section">
      <h2>Industry Certifications</h2>
      <p>We are proud to be recognized for our commitment to quality and innovation.</p>
      <div className="certification-cards">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            imageSrc={cert.imageSrc}
            title={cert.title}
            description={cert.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;