import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlatCard from './FlatCard';
import '../App.css';

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
      <div className="hero" style={{ backgroundImage: 'url(/photos/background.png)' }}>
        <div className="hero-text">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <div className="gallery">
        {flats.map(flat => (
          <FlatCard key={flat.id} title={flat.title} cover={flat.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
