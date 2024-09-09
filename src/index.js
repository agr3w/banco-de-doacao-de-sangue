import React from 'react';
import ReactDOM from 'react-dom/client';
import Routs from './routes';
import './style/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routs />
  </React.StrictMode>
);
