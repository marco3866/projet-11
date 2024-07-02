import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlatCard from '../components/FlatCard/FlatCard';
import Banner from '../components/Banner/Banner';
import './Home.css';

const Home = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    axios.get('/flats.json')
      .then(response => {
        setFlats(response.data);
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération des données des appartements !", error);
      });
  }, []);

  return (
    <div>
      <Banner backgroundImage="/photos/background.png" title="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {flats.map(flat => (
          <FlatCard key={flat.id} id={flat.id} title={flat.title} cover={flat.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
