import React from 'react'; // Importation de React pour pouvoir utiliser JSX
import { Link } from 'react-router-dom'; // Importation du composant Link pour la navigation
import './FlatCard.sass'; // Importation des styles CSS pour le composant FlatCard

const FlatCard = ({ id, title, cover }) => { // Déclaration du composant FlatCard qui prend en props 'id', 'title' et 'cover'
    return (
        <div className="flat-card"> {/* Conteneur principal du composant FlatCard */}
            <Link to={`/flat/${id}`}> {/* Utilisation de Link pour naviguer vers la page détaillée du flat */}
                <img src={cover} alt={title} className="flat-cover" /> {/* Image du flat, utilisant 'cover' comme source et 'title' comme texte alternatif */}
                <div className="flat-title">{title}</div> {/* Titre du flat affiché sous l'image */}
            </Link>
        </div>
    );
}

export default FlatCard; // Exportation du composant FlatCard pour une utilisation ailleurs dans l'application
