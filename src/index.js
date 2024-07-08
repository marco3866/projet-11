import React from 'react'; // Importation de la bibliothèque React
import { createRoot } from 'react-dom/client'; // Importation de la fonction createRoot pour créer un point d'ancrage de l'application React
import './index.sass'; // Importation des styles globaux
import App from './App'; // Importation du composant principal App

const container = document.getElementById('root'); // Sélection de l'élément DOM avec l'id 'root' pour y monter l'application React
const root = createRoot(container); // Création de la racine React pour l'élément sélectionné

root.render(
  <React.StrictMode>
    <App /> {/* Rendu du composant App à l'intérieur de React.StrictMode pour activer les vérifications strictes en développement */}
  </React.StrictMode>
);