import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatCard from './components/FlatCard';
import About from './components/About';
import './App.css';

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
    <div className="App">
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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
