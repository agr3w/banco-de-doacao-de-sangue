// src/components/Header.jsx
import React from 'react';
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint } from '@fortawesome/free-solid-svg-icons'; // Ícone de gota de sangue

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <FontAwesomeIcon icon={faTint} style={{ marginRight: '8px', color: 'white' }} />
        Logo do Projeto
      </div>
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
