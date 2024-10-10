import React from 'react';
import './Footer.css'; // Asegúrate de tener un archivo CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tu Nombre Aquí. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/lucas-segovia-545a78233/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/LucasMartinSego" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
