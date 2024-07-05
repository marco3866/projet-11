import React, { useState } from 'react';
import './Accordion.sass';

const Accordion = ({ origin, items, alignment }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleAccordionClick = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className={`accordion ${origin} ${alignment}`}>
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className={`accordion-button ${openIndexes.includes(index) ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
          </button>
          <div className={`accordion-content ${openIndexes.includes(index) ? 'show' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
