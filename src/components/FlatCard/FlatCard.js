import React from 'react'; // Importation de React pour créer des composants
import { Link } from 'react-router-dom'; // Importation de Link de react-router-dom pour la navigation interne
import './FlatCard.css'; // Importation du fichier CSS spécifique pour le composant FlatCard

// Composant fonctionnel FlatCard
const FlatCard = ({ id, title, cover }) => {
    return (
        <div className="flat-card"> {/* Conteneur principal de la carte du flat */}
            <Link to={`/flat/${id}`}> {/* Lien vers la page du flat, utilisant l'ID pour construire l'URL */}
                <img src={cover} alt={title} className="flat-cover" /> {/* Image de couverture du flat */}
                <div className="flat-title">{title}</div> {/* Titre du flat */}
            </Link>
        </div>
    );
}

// Exportation du composant FlatCard pour être utilisé dans d'autres parties de l'application
export default FlatCard;

