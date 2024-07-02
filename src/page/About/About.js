import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Banner from '../../components/Banner/Banner';
import './About.css';

const About = () => {
  return (
    <div>
      <Banner backgroundImage="/photos/backgroundapropos.png" title="" />
      <main>
        <section className="about-section">
          <Accordion>
            <div title="Fiabilité">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            <div title="Respect">
              <p>Le respect est une valeur fondamentale chez Kasa. Toute activité est faite dans le respect des utilisateurs et de leurs logements.</p>
            </div>
            <div title="Service">
              <p>Nos équipes sont à votre disposition pour vous fournir une expérience exceptionnelle. Nous répondons à toutes vos questions et préoccupations.</p>
            </div>
            <div title="Sécurité">
              <p>La sécurité de nos utilisateurs est notre priorité. Nous mettons en place des mesures strictes pour assurer un service sécurisé et fiable.</p>
            </div>
          </Accordion>
        </section>
      </main>
    </div>
  );
}

export default About;
