import React, { useState, useEffect } from 'react'; // Importation de React et des hooks useState et useEffect
import './Carousel.sass'; // Importation des styles spécifiques pour le carrousel

const Carousel = ({ pictures }) => { // Déclaration du composant fonctionnel Carousel, utilisant la prop 'pictures'
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Déclaration d'un state 'currentPhotoIndex' avec useState, initialisé à 0

  useEffect(() => {
    // Utilisation du hook useEffect pour effectuer des opérations après le rendu du composant
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Mise à jour de l'index de la photo courante toutes les 3 secondes
    }, 3000); // Pause de 3 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage du composant
  }, [pictures]); // Dépendance sur 'pictures', l'effet se réexécutera si 'pictures' change

  const handlePrevClick = () => { // Fonction pour gérer le clic sur le bouton "précédent"
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length); // Décrémente l'index de la photo courante
  };

  const handleNextClick = () => { // Fonction pour gérer le clic sur le bouton "suivant"
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % pictures.length); // Incrémente l'index de la photo courante
  };

  return (
    <div className="carousel">
      <div className="flat-image-container">
        {pictures.length > 1 && (
          <button className="carousel-button prev" onClick={handlePrevClick}>❮</button> // Bouton "précédent", affiché si plus d'une image
        )}
        <img src={pictures[currentPhotoIndex]} alt="Flat" className="carousel-image" /> {/* Affichage de l'image courante */}
        {pictures.length > 1 && (
          <button className="carousel-button next" onClick={handleNextClick}>❯</button> // Bouton "suivant", affiché si plus d'une image
        )}
        <div className="photo-count">{currentPhotoIndex + 1}/{pictures.length}</div> {/* Affichage du compteur de photos */}
      </div>
    </div>
  );
};

export default Carousel; // Exportation du composant Carousel