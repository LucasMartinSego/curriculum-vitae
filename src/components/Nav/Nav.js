// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/aboutme">Presentación</Link>
                </li>
                <li>
                    <Link to="/experience">Experiencia</Link>
                </li>
                <li>
                    <Link to="/education">Educación</Link>
                </li>
                <li>
                    <Link to="/skills">Habilidades</Link>
                </li>
                <li>
                    <Link to="/detail">Detalles</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
