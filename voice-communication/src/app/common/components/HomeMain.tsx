import React from 'react';
import './HomeMain.css';
import Image from 'next/image';

const HomeSection: React.FC = () => (
  <section className="home">
    <div className="home-content">
      <h1>Leading the Future of ARS Solutions</h1>
      <p>The only company providing end-to-end Hardware and Software solutions in the Automated Response System industry.</p>
      <div className="home-buttons">
        <button className="explore-button">Explore Solutions</button>
        <button className="contact-button">Contact Sales</button>
      </div>
    </div>
    <div className="home-main-image">
        <Image
            src="/images/homemain.png" // public 디렉토리 기준 경로
            alt="Home Main Image"
            width={500} // 원하는 너비
            height={300} // 원하는 높이
        />
    </div>
  </section>
);

export default HomeSection;