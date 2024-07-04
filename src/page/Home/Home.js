import React, { useEffect, useState } from 'react';
import { getFlats } from '../../utils/api';
import FlatCard from '../../components/FlatCard/FlatCard';
import Banner from '../../components/Banner/Banner';
import './Home.css';

const Home = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const data = await getFlats();
        setFlats(data);
      } catch (error) {
        console.error("Il y a eu une erreur lors de la récupération des données des appartements !", error);
      }
    };

    fetchFlats();
  }, []);

  return (
    <div>
      <Banner imageUrl="/photos/background.png" title="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {flats.length > 0 ? (
          flats.map(flat => (
            <FlatCard key={flat.id} id={flat.id} title={flat.title} cover={flat.cover} />
          ))
        ) : (
          <p>Aucun appartement disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
