// Experience.js
import React from 'react';
import Card from './Card';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience">
            <Card title="Experiencia">
                <div className="experience-details">
                    <Card title="ENE 2024 - ACTUALIDAD | FULL STACK | UTHGRA">
                        <p>
                            Desarrollo de vistas de pagos, visualización de tablas, carga de usuarios, entre otros para dar solución a los problemas de los usuarios, así como mantenimiento y automatización de procesos.
                        </p>
                        <p><strong>Entorno:</strong> Progress, Javascript, ABL, Python y PHP.</p>
                    </Card>
                    <Card title="JUN 2023 - AGO 2023 | FRONT END | KLASTON">
                        <p>
                            Realicé el desarrollo desde el Front para el sistema que utilizaba la empresa en su momento y también ayudé con la automatización de procesos.
                        </p>
                        <p><strong>Entorno:</strong> NEXTJS, TypeScript, React, Laravel, PHP.</p>
                    </Card>
                    <Card title="JUN 2021 - JUN 2023 | BACK END | SHALION">
                        <p>
                            Desarrollé scripts para el web scraping y tuve experiencias que abarcaban otras áreas como la coordinación de grupos, preparación y presentación de producto, análisis de datos, entre otras actividades no relacionadas específicamente con la programación.
                        </p>
                        <p><strong>Entorno:</strong> JS, jQuery, Axios, Playwright, Python, Selenium.</p>
                    </Card>
                </div>
            </Card>
        </div>
    );
};

export default Experience;
