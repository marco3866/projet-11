import React, { useState, useEffect } from 'react'; // Importe useState et useEffect pour gérer l'état local et les effets de bord.
import { useParams, useNavigate } from 'react-router-dom'; // Importe useParams pour accéder aux paramètres de l'URL et useNavigate pour la navigation.
import { getFlats } from '../../utils/api'; // Importe une fonction d'API pour récupérer les données des logements.
import Accordion from '../../components/Accordion/Accordion'; // Importe le composant Accordion pour afficher des sections pliables.
import Carousel from '../../components/Carousel/Carousel'; // Importe le composant Carousel pour afficher un carrousel d'images.
import './Flat.sass'; // Importe les styles CSS spécifiques à cette page.

const Flat = () => {
  const { id } = useParams(); // Récupère l'ID du logement à partir de l'URL.
  const navigate = useNavigate(); // Utilise useNavigate pour la navigation.
  const [flat, setFlat] = useState(null); // Initialise l'état 'flat' à null.
  const [loading, setLoading] = useState(true); // État pour gérer le chargement.

  useEffect(() => {
    // Effectue un effet de bord après le montage du composant pour récupérer les données.
    const fetchFlats = async () => {
      try {
        const data = await getFlats(); // Appelle getFlats pour obtenir les données des logements.
        const flat = data.find(flat => flat.id === id); // Trouve le logement spécifique par son ID.
        if (!flat) {
          // Si le logement n'est pas trouvé, redirige vers la page 404.
          navigate('/404');
        } else {
          setFlat(flat); // Met à jour l'état 'flat' avec les données trouvées.
        }
      } catch (error) {
        console.error("There was an error fetching the flat data!", error); // Gère les erreurs potentielles lors de la récupération des données.
        navigate('/404'); // En cas d'erreur, redirige vers la page 404.
      } finally {
        setLoading(false); // Met à jour l'état de chargement.
      }
    };

    fetchFlats(); // Appelle fetchFlats pour exécuter la récupération des données.
  }, [id, navigate]); // L'effet se déclenchera à nouveau si l'ID change.

  if (loading) {
    return <div>Loading...</div>;
  }

  const items = [
    {
      title: "Description",
      content: <p>{flat.description}</p>
    },
    {
      title: "Équipements",
      content: (
        <ul>
          {flat.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <div className="Flat">
      <main>
        <section className="flat-details">
          <Carousel pictures={flat.pictures} />
          <div className="flat-header">
            <div className="flat-info-left">
              <h1 id="flat-title">{flat.title}</h1>
              <p id="flat-location">{flat.location}</p>
            </div>
            <div className="flat-info-right desktop-only">
              <div className="host-info">
                <img src={flat.host.picture} alt="Host" id="host-image" />
                <p id="host-name">{flat.host.name}</p>
              </div>
            </div>
          </div>
          <div className="flat-notifications">
            {flat.tags.map((tag, index) => (
              <div key={index} className="notification">{tag}</div>
            ))}
            <div className="flat-rating desktop-only" id="flat-rating">
              {[...Array(5)].map((star, index) => (
                <span key={index} className="star">{index < flat.rating ? '★' : '☆'}</span>
              ))}
            </div>
            <div className="host-info mobile-only">
              <img src={flat.host.picture} alt="Host" id="host-image" />
              <p id="host-name">{flat.host.name}</p>
            </div>
            <div className="flat-rating mobile-only" id="flat-rating">
              {[...Array(5)].map((star, index) => (
                <span key={index} className="star">{index < flat.rating ? '★' : '☆'}</span>
              ))}
            </div>
          </div>
          <section className="flat-section">
            <Accordion origin="flat" items={items} alignment="flat" />
          </section>
        </section>
      </main>
    </div>
  );
};

export default Flat;
