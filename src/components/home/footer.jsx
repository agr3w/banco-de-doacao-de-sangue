// src/components/Footer.jsx
import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Verificador de Doação de Sangue. Todos os direitos reservados.</p>
      <div>
        <a href="https://facebook.com" className={styles.footerLink}>Facebook</a>
        <a href="https://twitter.com" className={styles.footerLink}>Twitter</a>
        <a href="https://instagram.com" className={styles.footerLink}>Instagram</a>
      </div>
      <p>Contato: info@verificadordosangue.com</p>
    </footer>
  );
};

export default Footer;
