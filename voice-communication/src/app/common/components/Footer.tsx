import styles from '../../styles/Footer.module.css';   

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div>© 2024 Company Name. All rights reserved.</div>
    <nav>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
      <a href="/security">Security</a>
      <a href="/sitemap">Sitemap</a>
    </nav>
  </footer>
);

export default Footer;