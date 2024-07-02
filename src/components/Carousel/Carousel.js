import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ pictures }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // 3 seconds pause

    return () => clearInterval(interval);
  }, [pictures]);

  const handlePrevClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const handleNextClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      <div className="flat-image-container">
        <button className="carousel-button prev" onClick={handlePrevClick}>❮</button>
        <img src={pictures[currentPhotoIndex]} alt="Flat" className="carousel-image" />
        <button className="carousel-button next" onClick={handleNextClick}>❯</button>
        <div className="photo-count">{currentPhotoIndex + 1}/{pictures.length}</div>
      </div>
    </div>
  );
};

export default Carousel;
