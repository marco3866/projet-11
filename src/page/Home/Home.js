import React, { useEffect, useState } from 'react'; // Importation de React, useEffect et useState pour la gestion du cycle de vie et de l'état
import { getFlats } from '../../utils/api'; // Importation de la fonction getFlats pour récupérer les données des appartements
import FlatCard from '../../components/FlatCard/FlatCard'; // Importation du composant FlatCard pour afficher chaque appartement
import Banner from '../../components/Banner/Banner'; // Importation du composant Banner pour afficher une bannière en haut de la page
import './Home.sass'; // Importation des styles CSS spécifiques pour la page Home

const Home = () => {
  const [flats, setFlats] = useState([]); // Initialise l'état 'flats' avec un tableau vide pour stocker les appartements

  useEffect(() => {
    // Utilise useEffect pour charger les données des appartements après le premier rendu du composant
    const fetchFlats = async () => {
      try {
        const data = await getFlats(); // Appel asynchrone à getFlats pour récupérer les données
        setFlats(data); // Met à jour l'état 'flats' avec les données récupérées
      } catch (error) {
        console.error("Il y a eu une erreur lors de la récupération des données des appartements !", error); // Gère les erreurs potentielles lors du fetch
      }
    };

    fetchFlats(); // Appelle la fonction fetchFlats pour exécuter le fetch
  }, []); // Un tableau de dépendances vide indique que l'effet ne s'exécutera qu'une fois après le montage initial

  return (
    <div>
      {/* Affiche une bannière avec une image de fond spécifiée et un titre */}
      <Banner imageUrl="/photos/background.png" title="Chez vous, partout et ailleurs" />
      {/* Section qui affiche les cartes d'appartements */}
      <div className="gallery">
        {flats.length > 0 ? ( // Vérifie si l'array 'flats' contient des éléments
          flats.map(flat => ( // Mappe chaque appartement à un composant FlatCard
            <FlatCard key={flat.id} id={flat.id} title={flat.title} cover={flat.cover} /> // Passe les propriétés nécessaires à FlatCard
          ))
        ) : (
          <p>Aucun appartement disponible.</p> // Affiche un message si aucun appartement n'est disponible
        )}
      </div>
    </div>
  );
};

export default Home; // Exporte le composant Home pour une utilisation dans d'autres parties de l'application
