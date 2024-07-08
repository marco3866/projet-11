import React, { useState } from 'react'; // Importation de React et du hook useState
import './Accordion.sass'; // Importation des styles spécifiques pour l'accordéon

const Accordion = ({ origin, items, alignment }) => { // Déclaration du composant fonctionnel Accordion, utilisant les props 'origin', 'items' et 'alignment'
  const [openIndexes, setOpenIndexes] = useState([]); // Déclaration d'un state 'openIndexes' avec useState, initialisé à un tableau vide

  const handleAccordionClick = (index) => { // Déclaration de la fonction handleAccordionClick pour gérer les clics sur les éléments de l'accordéon
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) { // Si l'index est déjà présent dans openIndexes
        return prevIndexes.filter((i) => i !== index); // Le retirer (fermer l'élément)
      } else {
        return [...prevIndexes, index]; // Sinon, l'ajouter (ouvrir l'élément)
      }
    });
  };

  return (
    <div className={`accordion ${origin} ${alignment}`}> {/* Application des classes CSS dynamiquement en fonction des props */}
      {items.map((item, index) => ( // Parcours de chaque élément dans items et création de l'UI correspondante
        <div className="accordion-item" key={index}> {/* Chaque élément de l'accordéon */}
          <button
            className={`accordion-button ${openIndexes.includes(index) ? 'active' : ''}`} // Bouton de l'accordéon avec la classe 'active' si l'élément est ouvert
            onClick={() => handleAccordionClick(index)} // Gestionnaire de clic pour ouvrir/fermer l'élément
          >
            {item.title} {/* Affichage du titre de l'élément */}
          </button>
          <div className={`accordion-content ${openIndexes.includes(index) ? 'show' : ''}`}> {/* Contenu de l'élément avec la classe 'show' si l'élément est ouvert */}
            {item.content} {/* Affichage du contenu de l'élément */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; // Exportation du composant Accordion