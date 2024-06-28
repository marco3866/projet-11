import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importation du fichier CSS global

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
