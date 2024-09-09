// src/components/WelcomeMessage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualize a importação

const WelcomeMessage = () => {
  const navigate = useNavigate(); // Use useNavigate em vez de useHistory

  const handleClick = () => {
    navigate('/verificar-elegibilidade'); // Atualize a navegação
  };

  return (
    <section className="welcome-message">
      <h1>Bem-vindo ao Verificador de Doação de Sangue</h1>
      <p>Nosso objetivo é ajudar você a verificar rapidamente sua elegibilidade para doar sangue.</p>
      <button onClick={handleClick}>Verificar Elegibilidade</button>
    </section>
  );
};

export default WelcomeMessage;
