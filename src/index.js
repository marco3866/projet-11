import React from 'react';
// Importation de la bibliothèque React, nécessaire pour écrire des composants React.

import { createRoot } from 'react-dom/client';
// Importation de la méthode createRoot de la bibliothèque react-dom/client.

import './index.css';
// Importation du fichier CSS global pour l'application. Ce fichier contient les styles généraux qui s'appliquent à toute l'application.

import App from './App';
// Importation du composant principal de l'application, App, qui contient la structure et la logique principale de l'application.

const container = document.getElementById('root');
// Sélection de l'élément DOM où l'application React sera rendue.

const root = createRoot(container);
// Création d'une racine React avec createRoot en utilisant l'élément DOM sélectionné.

root.render(
  // Utilisation de la méthode render sur la racine React pour rendre le composant App.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);