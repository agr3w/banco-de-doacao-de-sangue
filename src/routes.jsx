// src/routes.jsx
import Home from 'pages/home/home';
import VerifyEligibility from 'pages/VerifyEligibility/verifyEligibility';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';

const Routs = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/verificar-elegibilidade' element={<VerifyEligibility />} />
        {/* Adicione mais rotas aqui conforme necessário */}
      </Routes>
    </Router>
  );
};

export default Routs;
