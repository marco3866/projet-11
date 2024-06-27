import React from 'react';

const FlatCard = ({ title, cover }) => (
  <div className="flat-card">
    <img src={cover} alt={title} className="flat-cover" />
    <div className="flat-title">{title}</div>
  </div>
);

export default FlatCard;
