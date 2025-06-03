'use client'

import React from 'react';
import EventBanner from './EventBanner';
import styles from '../../styles/Header.module.css';
import NavLink from './NavLink';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <EventBanner />
      <div className={styles.navContainer}>
        <div className={styles.logo}>LOGO</div>
        <nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/all-in-one">All-In-One</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className={styles.languageAndButton}>
          <button className={styles.languageButton}>EN</button>
          <span>|</span>
          <button className={styles.languageButton}>KO</button>
          <button className={styles.getStartedButton}>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;