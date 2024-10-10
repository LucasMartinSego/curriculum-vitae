import React from 'react';
import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from '../Card/Card';


const Skills = () => {
    return (
        <Card title="Habilidades">
            <ul>
                <li>
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span>JavaScript</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>HTML</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>CSS</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>jQuery</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>Programación funcional</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>Programación asincrónica</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>Python</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>ABL</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>PHP</span>
                </li>
                <li><i className="fa fa-code" aria-hidden="true"></i>
                    <span>Bootstrap</span>
                </li>
            </ul>
            <p>
                Soy autodidacta y tengo la capacidad de aprender rápidamente nuevas tecnologías.
                Disfruto colaborar en equipos y tengo un enfoque creativo para resolver desafíos técnicos complejos.
            </p>
        </Card>
    );
};

export default Skills;
