import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './exercice1/App1';
import App2 from './exercice1/App2';
import AfficheurTexte from './tp5function/tp5function/AfficheurTexte';
import Compteur from './exerciceCompteur/Compteur';
import Input from './exericeinput/exerciceinput';
import AppTp6 from './TP-6-Communication-inter-composant/AppTp6';
import Appeffect from './UseEffect/Appeffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appeffect/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
