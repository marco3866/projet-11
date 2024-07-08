import React from 'react'; // Importation de la bibliothèque React
import './Banner.sass'; // Importation des styles spécifiques pour la bannière

const Banner = ({ imageUrl, title }) => { // Déclaration du composant fonctionnel Banner, utilisant les props 'imageUrl' et 'title'
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}> {/* Application de l'image de fond via les styles en ligne */}
      <div className="banner-text"> {/* Conteneur pour le texte de la bannière */}
        <h1>{title}</h1> {/* Affichage du titre passé en props */}
      </div>
    </div>
  );
};

export default Banner; // Exportation du composant Banner
