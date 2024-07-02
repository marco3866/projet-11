import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Flat.css';

const Flat = () => {
    const { id } = useParams();
    const [flat, setFlat] = useState(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

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

    useEffect(() => {
        if (flat) {
            const interval = setInterval(() => {
                setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % flat.pictures.length);
            }, 3000); // 3 seconds pause

            return () => clearInterval(interval);
        }
    }, [flat]);

    const handlePrevClick = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + flat.pictures.length) % flat.pictures.length);
    };

    const handleNextClick = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % flat.pictures.length);
    };

    if (!flat) {
        return <div>Loading...</div>;
    }

    const handleAccordionClick = (contentId) => {
        const content = document.getElementById(contentId);
        content.classList.toggle('show');
    };

    return (
        <div className="Flat">
            <main>
                <section className="flat-details">
                    <div className="flat-image-container">
                        <button className="carousel-button prev" onClick={handlePrevClick}>❮</button>
                        <img src={flat.pictures[currentPhotoIndex]} alt="Flat" id="flat-image" />
                        <button className="carousel-button next" onClick={handleNextClick}>❯</button>
                        <div className="photo-count" id="photo-count">{currentPhotoIndex + 1}/{flat.pictures.length}</div>
                    </div>
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
                    <div className="flat-description">
                        <button className="accordion-button" onClick={() => handleAccordionClick('description-content')}>Description</button>
                        <button className="accordion-button" onClick={() => handleAccordionClick('equipment-content')}>Équipements</button>
                    </div>
                    <div className="accordion-contents">
                        <div className="accordion-content" id="description-content">
                            <p>{flat.description}</p>
                        </div>
                        <div className="accordion-content" id="equipment-content">
                            <ul>
                                {flat.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Flat;
