import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import FlatCard from './components/FlatCard';
import Flat from './components/Flat';
import About from './components/About';
import './App.css';

const App = () => {
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
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div>
              <div className="hero" style={{ backgroundImage: 'url(/photos/background.png)' }}>
                <div className="hero-text">
                  <h1>Chez vous, partout et ailleurs</h1>
                </div>
              </div>
              <div className="gallery">
                {flats.map(flat => (
                  <FlatCard key={flat.id} id={flat.id} title={flat.title} cover={flat.cover} />
                ))}
              </div>
            </div>
          } />
          <Route path="/flat/:id" element={<Flat />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
