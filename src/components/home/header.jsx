// src/components/Header.jsx
import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">Logo do Projeto</div>
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/verificar-elegibilidade">Verificar Elegibilidade</a></li>
          <li><a href="/informacoes">Informações</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
