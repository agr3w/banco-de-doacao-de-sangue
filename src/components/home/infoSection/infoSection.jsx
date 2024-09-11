// src/components/InfoSection.jsx
import React from 'react';
import styles from './infoSection.module.css'

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <h2>Por que doar sangue é importante?</h2>
      <p>A doação de sangue salva vidas e é um ato de solidariedade. Doe sangue regularmente e ajude quem precisa.</p>
      <ul className={styles.infoList}>
        <li><a href="/informacoes">Saiba mais sobre doação de sangue</a></li>
        <li><a href="/locais-de-doacao">Encontre um local de doação perto de você</a></li>
      </ul>
    </section>
  );
};

export default InfoSection;