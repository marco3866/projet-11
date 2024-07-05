import React from 'react';
import './Banner.sass';

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
