import React from 'react'; // Importation de React pour créer des composants
import { NavLink } from 'react-router-dom'; // Importation de NavLink de react-router-dom pour la navigation avec gestion des états actifs
import './Header.sass'; // Importation du fichier CSS spécifique pour le composant Header

// Composant fonctionnel Header
const Header = () => {
  return (
    <header> {/* Conteneur principal de l'en-tête */}
      <div className="logo"> {/* Conteneur pour le logo */}
        <img src="/photos/Logo.jpeg" alt="Kasa Logo" /> {/* Affichage du logo avec la source et l'attribut alt */}
      </div>
      <nav> {/* Conteneur pour la navigation */}
        <ul> {/* Liste non ordonnée pour les liens de navigation */}
          <li> {/* Élément de liste pour le lien vers la page d'accueil */}
            <NavLink exact to="/" activeClassName="active"> {/* Lien de navigation vers la page d'accueil, avec gestion de l'état actif */}
              Accueil
            </NavLink>
          </li>
          <li> {/* Élément de liste pour le lien vers la page À Propos */}
            <NavLink to="/about" activeClassName="active"> {/* Lien de navigation vers la page À Propos, avec gestion de l'état actif */}
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Exportation du composant Header pour être utilisé dans d'autres parties de l'application
export default Header;
