// src/components/Header.jsx
import React from 'react';
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo do Projeto</div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/" className={styles.navItem}>Início</a></li>
          <li><a href="/verificar-elegibilidade" className={styles.navItem}>Verificar Elegibilidade</a></li>
          <li><a href="/informacoes" className={styles.navItem}>Informações</a></li>
          <li><a href="/contato" className={styles.navItem}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
