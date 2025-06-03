import React from 'react';
import './CertificationCard.css';

interface CertificationCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="certification-card">
      <img src={imageSrc} alt={title} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CertificationCard;