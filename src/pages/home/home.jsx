// src/pages/Home.jsx

import Footer from 'components/home/footer';
import Header from 'components/home/header';
import InfoSection from 'components/home/infoSection/infoSection';
import WelcomeMessage from 'components/home/welcomeMessage/welcomeMessage';
import React from 'react';


const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
