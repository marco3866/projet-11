import React from 'react';
import './Banner.css';

const Banner = ({ backgroundImage, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;
