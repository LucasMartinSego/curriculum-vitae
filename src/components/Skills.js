import React from 'react';
import './Skills.css';
import 'font-awesome/css/font-awesome.min.css';
import Card from './Card';


const Skills = () => {
    return (
        <Card title="Habilidades">
            <ul>
                <li><i className="fa fa-code" aria-hidden="true"></i> JavaScript</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> HTML</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> CSS</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> jQuery</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> Programación funcional y asincrónica</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> Python</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> ABL</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> PHP</li>
                <li><i className="fa fa-code" aria-hidden="true"></i> Bootstrap</li>
            </ul>
            <p>
                Soy autodidacta y tengo la capacidad de aprender rápidamente nuevas tecnologías. 
                Disfruto colaborar en equipos y tengo un enfoque creativo para resolver desafíos técnicos complejos.
            </p>
        </Card>
    );
};

export default Skills;
