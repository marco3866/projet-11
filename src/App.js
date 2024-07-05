import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Flat from './page/Flat/Flat';
import About from './page/About/About';
import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';
import { getFlats } from './utils/api';
import './App.sass';

const App = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const data = await getFlats();
        setFlats(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des flats :", error);
      }
    };

    fetchFlats();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home flats={flats} />} />
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
