import React, { useEffect, useState } from 'react'; // Importation des hooks useEffect et useState de React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importation des composants de routing
import Header from './components/Header/Header'; // Importation du composant Header
import Footer from './components/Footer/Footer'; // Importation du composant Footer
import Flat from './page/Flat/Flat'; // Importation du composant Flat
import About from './page/About/About'; // Importation du composant About
import Home from './page/Home/Home'; // Importation du composant Home
import NotFound from './page/NotFound/NotFound'; // Importation du composant NotFound
import { getFlats } from './utils/api'; // Importation de la fonction getFlats depuis le module api
import './App.sass'; // Importation des styles

const App = () => {
  const [flats, setFlats] = useState([]); // Déclaration d'un state 'flats' avec useState, initialisé à un tableau vide

  useEffect(() => {
    // Utilisation du hook useEffect pour effectuer des opérations après le rendu du composant
    const fetchFlats = async () => {
      try {
        const data = await getFlats(); // Appel à l'API pour récupérer les données des flats
        setFlats(data); // Mise à jour du state 'flats' avec les données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération des flats :", error); // Gestion des erreurs
      }
    };

    fetchFlats(); // Appel de la fonction fetchFlats
  }, []); // Le tableau vide signifie que cet effet ne s'exécutera qu'une seule fois après le montage du composant

  return (
    <Router>
      <div className="App">
        <Header /> {/* Inclusion du composant Header */}
        <Routes>
          <Route path="/" element={<Home flats={flats} />} /> {/* Route pour la page d'accueil, passage de 'flats' comme props */}
          <Route path="/flat/:id" element={<Flat />} /> {/* Route pour la page Flat, utilisation de useParams dans le composant Flat */}
          <Route path="/about" element={<About />} /> {/* Route pour la page About */}
          <Route path="*" element={<NotFound />} /> {/* Route pour la page 404 */}
        </Routes>
        <Footer /> {/* Inclusion du composant Footer */}
      </div>
    </Router>
  );
}

export default App; // Exportation du composant App