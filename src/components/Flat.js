import React, { useState, useEffect } from 'react'; // Importation de React et des hooks useState et useEffect pour gérer l'état et les effets de bord
import { useParams } from 'react-router-dom'; // Importation du hook useParams de react-router-dom pour accéder aux paramètres de l'URL
import axios from 'axios'; // Importation d'axios pour effectuer des requêtes HTTP
import '../App.css'; // Importation du fichier CSS global de l'application

const Flat = () => {
    const { id } = useParams(); // Extraction de l'ID du flat à partir des paramètres de l'URL
    const [flat, setFlat] = useState(null); // État pour stocker les données du flat
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // État pour suivre l'index de la photo actuelle dans le carrousel

    // useEffect pour récupérer les données du flat depuis un fichier JSON
    useEffect(() => {
        axios.get('/flats.json')
            .then(response => {
                const flat = response.data.find(flat => flat.id === id); // Recherche du flat correspondant à l'ID dans les données
                setFlat(flat); // Mise à jour de l'état avec les données du flat
            })
            .catch(error => {
                console.error("There was an error fetching the flat data!", error); // Gestion des erreurs lors de la requête
            });
    }, [id]); // Ce useEffect se déclenche lorsque l'ID change

    // useEffect pour gérer le carrousel de photos
    useEffect(() => {
        if (!flat) return; // Si les données du flat ne sont pas encore chargées, ne rien faire

        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % flat.pictures.length); // Changement de photo toutes les 3 secondes
        }, 3000); // 3 secondes de pause entre les changements de photos

        return () => clearInterval(interval); // Nettoyage de l'intervalle lorsque le composant est démonté ou lorsque flat change
    }, [flat]); // Ce useEffect se déclenche lorsque flat change

    // Gestion du clic sur le bouton "précédent" du carrousel
    const handlePrevClick = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + flat.pictures.length) % flat.pictures.length);
    };

    // Gestion du clic sur le bouton "suivant" du carrousel
    const handleNextClick = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % flat.pictures.length);
    };

    if (!flat) {
        return <div>Loading...</div>; // Affichage d'un message de chargement tant que les données du flat ne sont pas disponibles
    }

    // Gestion du clic sur les boutons d'accordéon
    const handleAccordionClick = (contentId) => {
        const content = document.getElementById(contentId); // Récupération de l'élément correspondant à l'ID
        content.classList.toggle('show'); // Bascule de la classe 'show' pour afficher/masquer le contenu
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
