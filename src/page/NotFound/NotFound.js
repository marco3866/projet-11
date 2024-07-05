import React from 'react'; // Importation de React pour créer des composants
import { Link } from 'react-router-dom'; // Importation de Link de react-router-dom pour la navigation interne
import './NotFound.sass'; // Importation du fichier CSS spécifique à NotFound

// Composant fonctionnel NotFound
const NotFound = () => {
  return (
    <div>
      <main className="error-page">
        <div className="error-content">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
