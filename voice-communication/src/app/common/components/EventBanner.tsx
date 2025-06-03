import React from 'react';
import styles from '../../styles/EventBanner.module.css';

const EventBanner: React.FC = () => (
  <div className={styles.banner}>
    <span>🎉 Special Promotion: Get 30% off on all ARS solutions until March 31st! <a href="#">Learn More →</a></span>
    <span>🚀 New Feature: AI-powered call routing now available! <a href="#">Try Now →</a></span>
    <span>💡 Free Workshop: Join our ARS optimization webinar! <a href="#">Register →</a></span>
  </div>
);

export default EventBanner;