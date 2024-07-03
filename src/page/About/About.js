import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Banner from '../../components/Banner/Banner';
import './About.css';

const About = () => {
  const items = [
    {
      title: "Fiabilité",
      content: (
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      )
    },
    {
      title: "Respect",
      content: (
        <p>Le respect est une valeur fondamentale chez Kasa. Toute activité est faite dans le respect des utilisateurs et de leurs logements.</p>
      )
    },
    {
      title: "Service",
      content: (
        <p>Nos équipes sont à votre disposition pour vous fournir une expérience exceptionnelle. Nous répondons à toutes vos questions et préoccupations.</p>
      )
    },
    {
      title: "Sécurité",
      content: (
        <p>La sécurité de nos utilisateurs est notre priorité. Nous mettons en place des mesures strictes pour assurer un service sécurisé et fiable.</p>
      )
    }
  ];

  return (
    <div>
      <Banner imageUrl="/photos/backgroundapropos.png" title="" />
      <main>
        <section className="about-section">
          <Accordion origin="about" items={items} />
        </section>
      </main>
    </div>
  );
}

export default About;
