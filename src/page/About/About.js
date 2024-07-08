import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import Banner from '../../components/Banner/Banner';
import './About.sass';

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
      {/* Affichage de la bannière sans titre mais avec une image de fond. Le titre est laissé vide ici. */}
      <Banner imageUrl="/photos/backgroundapropos.png" title="" />
      {/* Section principale de la page contenant l'Accordion. */}
      <main>
        <section className="about-section">
          {/* Utilisation du composant Accordion pour afficher les valeurs de l'entreprise de manière interactive. 
              'origin' est utilisé ici pour ajouter une classe CSS spécifique pour le style. */}
          <Accordion origin="about" items={items} />
        </section>
      </main>
    </div>
  );
}

export default About;
