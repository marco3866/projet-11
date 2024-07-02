import React from 'react';
import './Accordion.css';

const Accordion = ({ children, customClass }) => {
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
    <div className={`accordion ${customClass}`}>
      {React.Children.map(children, (child) => (
        <div className="accordion-item">
          <button className="accordion-button" onClick={handleAccordionClick}>
            {child.props.title}
          </button>
          <div className="accordion-content">{child.props.children}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
