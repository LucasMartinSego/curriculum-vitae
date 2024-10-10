import React from 'react';
import { useNavigate } from 'react-router-dom';
import Experience from '../Experience/Experience.js';
import Education from '../Education/Education.js';
import Skills from '../Skills/Skills.js';
import AboutMe from '../AboutMe/AboutMe.js';
// import Detail from './Detail.js';

function Home() {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path); // Navegar a la ruta del componente clicado
    };

    return (
        <div className="content">
            <div onClick={() => handleClick('/aboutme')}>
                <AboutMe />
            </div>
            <div onClick={() => handleClick('/experience')}>
                <Experience />
            </div>
            <div onClick={() => handleClick('/education')}>
                <Education />
            </div>
            <div onClick={() => handleClick('/skills')}>
                <Skills />
            </div>
        </div>
    );
}

export default Home;
