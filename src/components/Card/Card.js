// Card.js
import React, { useEffect } from 'react';
import './Card.css';

const Card = ({ title, children, viewTransitionName }) => {
  // Reemplaza caracteres no válidos para el selector
  const sanitizedTitle = title.replace(/[\s|]+/g, '-').toLowerCase();

  useEffect(() => {
    const handleScrollAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
    });

    // Usa el título saneado para crear el selector
    const element = document.querySelector(`.card-${sanitizedTitle}`);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [sanitizedTitle]);

  return (
    <div className={`div-animation card card-${sanitizedTitle}`} style={{ viewTransitionName }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
