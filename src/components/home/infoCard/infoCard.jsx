import React from 'react';
import styles from './infoCard.module.css'

const InfoCard = ({ title, description, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <a href={link} className={styles.cardLink}>Saiba Mais</a>
    </div>
  );
};

export default InfoCard;
