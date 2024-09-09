// src/routes.jsx
import Home from 'pages/home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';

const Routs = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Adicione mais rotas aqui conforme necessário */}
      </Routes>
    </Router>
  );
};

export default Routs;
