// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Lucas Segovia</h1>
            <h4>Desarrollador Full Stack</h4>
            <p className="description">Apasionado por crear aplicaciones web interactivas y eficientes.</p>
            <p>Email: <a href="mailto:lucasmartinsego@gmail.com">lucasmartinsego@gmail.com</a></p>
            <p>Teléfono: (011) 2492-4462</p>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/lucas-segovia-545a78233/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/LucasMartinSego" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
