import React, { useEffect } from 'react';
import '../App.css';

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/accordion.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="hero" style={{ backgroundImage: 'url(/photos/backgroundapropos.png)' }}>
        <div className="hero-text">
        </div>
      </div>
      <main>
        <section className="about-section">
          <div className="accordion">
            <div className="accordion-item">
              <button className="accordion-button">Fiabilité</button>
              <div className="accordion-content">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">Respect</button>
              <div className="accordion-content">
                <p>Le respect est une valeur fondamentale chez Kasa. Toute activité est faite dans le respect des utilisateurs et de leurs logements.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">Service</button>
              <div className="accordion-content">
                <p>Nos équipes sont à votre disposition pour vous fournir une expérience exceptionnelle. Nous répondons à toutes vos questions et préoccupations.</p>
              </div>
            </div>
            <div className="accordion-item">
              <button className="accordion-button">Sécurité</button>
              <div className="accordion-content">
                <p>La sécurité de nos utilisateurs est notre priorité. Nous mettons en place des mesures strictes pour assurer un service sécurisé et fiable.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;