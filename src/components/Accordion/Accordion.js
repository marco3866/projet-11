import React from 'react';
import './Accordion.css';

const Accordion = ({ origin, items, alignment }) => {
  const handleAccordionClick = (e) => {
    const button = e.currentTarget;
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      content.classList.add('show');
    } else {
      content.classList.remove('show');
    }
  };

  return (
    <div className={`accordion ${origin} ${alignment}`}>
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button className="accordion-button" onClick={handleAccordionClick}>
            {item.title}
          </button>
          <div className="accordion-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
