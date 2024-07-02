import React from 'react'; // Importation de React pour créer des composants
import './Footer.css'; // Importation du fichier CSS spécifique pour le composant Footer

// Composant fonctionnel Footer
const Footer = () => (
  <footer> {/* Conteneur principal du pied de page */}
    <div className="footer-logo"> {/* Conteneur pour le logo du pied de page */}
      <img src="/photos/logoblack.jpg" alt="Kasa Logo Black" /> {/* Affichage du logo avec la source et l'attribut alt */}
    </div>
    <div className="footer-text"> {/* Conteneur pour le texte du pied de page */}
      © 2020 Kasa. All rights reserved {/* Texte du pied de page */}
    </div>
  </footer>
);

// Exportation du composant Footer pour être utilisé dans d'autres parties de l'application
export default Footer;

