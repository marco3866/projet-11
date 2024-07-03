import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Accordion from '../../components/Accordion/Accordion';
import Carousel from '../../components/Carousel/Carousel';
import './Flat.css';

const Flat = () => {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    axios.get('/flats.json')
      .then(response => {
        const flat = response.data.find(flat => flat.id === id);
        setFlat(flat);
      })
      .catch(error => {
        console.error("There was an error fetching the flat data!", error);
      });
  }, [id]);

  if (!flat) {
    return <div>Loading...</div>;
  }

  const items = [
    {
      title: "Description",
      content: <p>{flat.description}</p>
    },
    {
      title: "Équipements",
      content: (
        <ul>
          {flat.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <div className="Flat">
      <main>
        <section className="flat-details">
          <Carousel pictures={flat.pictures} />
          <div className="flat-header">
            <div className="flat-info-left">
              <h1 id="flat-title">{flat.title}</h1>
              <p id="flat-location">{flat.location}</p>
            </div>
            <div className="flat-info-right">
              <div className="host-info">
                <p id="host-name">{flat.host.name}</p>
                <img src={flat.host.picture} alt="Host" id="host-image" />
              </div>
            </div>
          </div>
          <div className="flat-notifications">
            {flat.tags.map((tag, index) => (
              <div key={index} className="notification">{tag}</div>
            ))}
            <div className="flat-rating" id="flat-rating">
              {[...Array(5)].map((star, index) => (
                <span key={index} className="star">{index < flat.rating ? '★' : '☆'}</span>
              ))}
            </div>
          </div>
          <section className="flat-section">
            <Accordion origin="flat" items={items} alignment="flat" />
          </section>
        </section>
      </main>
    </div>
  );
};

export default Flat;
