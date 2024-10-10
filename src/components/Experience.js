import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div id="div-animation">
            <section className="experience common-section">
                <h2>Experiencia</h2>
                <div>
                    <h3>ENE 2024 - ACTUALIDAD | FULL STACK | UTHGRA</h3>
                    <p>
                        Desarrollo de vistas de pagos, visualización de tablas, carga de usuarios, entre otros para dar solución a los problemas de los usuarios, así como mantenimiento y automatización de procesos.
                    </p>
                    <p><strong>Entorno:</strong> Progress, Javascript, ABL, Python y PHP.</p>
                </div>
                <div>
                    <h3>JUN 2023 - AGO 2023 | FRONT END | KLASTON</h3>
                    <p>
                        Realicé el desarrollo desde el Front para el sistema que utilizaba la empresa en su momento y también ayudé con la automatización de procesos.
                    </p>
                    <p><strong>Entorno:</strong> NEXTJS, TypeScript, React, Laravel, PHP.</p>
                </div>
                <div>
                    <h3>JUN 2021 - JUN 2023 | BACK END | SHALION</h3>
                    <p>
                        Desarrollé scripts para el web scraping y tuve experiencias que abarcaban otras áreas como la coordinación de grupos, preparación y presentación de producto, análisis de datos, entre otras actividades no relacionadas específicamente con la programación.
                    </p>
                    <p><strong>Entorno:</strong> JS, jQuery, Axios, Playwright, Python, Selenium.</p>
                </div>
            </section>
        </div>
    );
};

export default Experience;