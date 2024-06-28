import React, { useEffect, useState } from 'react'; // Importation des hooks React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants de react-router-dom
import axios from 'axios'; // Importation d'axios pour les requêtes HTTP
import Header from './components/Header'; // Importation du composant Header
import Footer from './components/Footer'; // Importation du composant Footer
import FlatCard from './components/FlatCard'; // Importation du composant FlatCard
import Flat from './components/Flat'; // Importation du composant Flat
import About from './components/About'; // Importation du composant About
import NotFound from './components/NotFound'; // Importation du composant NotFound
import './App.css'; // Importation des styles CSS

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
          <Route path="*" element={<NotFound />} /> {/* Route pour la page 404 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
