// src/pages/Home.jsx

import Footer from 'components/home/footer';
import Header from 'components/home/header';
import InfoCard from 'components/home/infoCard/infoCard';
import VideoWidget from 'components/home/videoWidget/videoWidget';
import WelcomeMessage from 'components/home/welcomeMessage/welcomeMessage';
import styles from './home.module.css';
import React from 'react';


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <VideoWidget />
      <WelcomeMessage />
      {/* Seção de informações com cards interativos */}
      <div className={styles.infoSection}>
        <InfoCard title="Localize um Centro de Doação" description="Encontre um centro de doação próximo a você." link="/centros" />
        <InfoCard title="Guia para Novos Doadores" description="Informações e dicas para quem vai doar pela primeira vez." link="/guia" />
        <InfoCard title="Benefícios da Doação" description="Descubra os benefícios de doar sangue." link="/beneficios" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;