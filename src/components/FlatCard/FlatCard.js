import React from 'react';
import { Link } from 'react-router-dom';
import './FlatCard.css';

const FlatCard = ({ id, title, cover }) => {
  return (
    <div className="flat-card">
      <Link to={`/flat/${id}`}>
        <img src={cover} alt={title} className="flat-cover" />
        <div className="flat-title">{title}</div>
      </Link>
    </div>
  );
};

export default FlatCard;