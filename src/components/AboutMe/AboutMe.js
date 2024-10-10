import React from 'react';
import './AboutMe.css';
import Card from '../Card/Card';

const AboutMe = () => {
    return (
        <Card title="Sobre Mí" viewTransitionName="about-me"> {/* Añadir viewTransitionName */}
            <p>
                Soy un desarrollador especializado en automatización, mantenimiento de código y soluciones
                full stack. Tengo experiencia en la creación de scripts, web scraping y optimización de
                procesos, habiendo trabajado en proyectos que incluyen OCR y chatbots para el sector turismo.
            </p>
            <p>
                Mi especialidad es JavaScript, pero también manejo Python, ABL, Node.js, Express y Bootstrap.
                He coordinado equipos pequeños, fomentando un entorno colaborativo y productivo.
            </p>
            <p>
                Mi objetivo es avanzar hacia roles en DevOps, mientras continúo desarrollando mis habilidades
                full stack y profundizando en mi formación en Ingeniería Informática.
            </p>
            <p>
                Soy autodidacta y me apasiona participar en proyectos personales para mejorar continuamente
                mis capacidades y mantenerme al día con las últimas tecnologías.
            </p>
        </Card>
    );
};

export default AboutMe;
