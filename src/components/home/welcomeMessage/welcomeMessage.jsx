// src/components/WelcomeMessage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualize a importação
import styles from './welcomeMessage.module.css'

const WelcomeMessage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/verificar-elegibilidade');
  };

  return (
    <section className={styles.welcomeMessage}>
      <h1>Bem-vindo ao Verificador de Doação de Sangue</h1>
      <p>Nosso objetivo é ajudar você a verificar rapidamente sua elegibilidade para doar sangue.</p>
      <button onClick={handleClick} className={styles.button}>Verificar Elegibilidade</button>
    </section>
  );
};

export default WelcomeMessage;