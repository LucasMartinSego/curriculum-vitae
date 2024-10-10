import React, { useEffect, useState } from 'react';
import './Detail.css';

const Detail = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false); // Para manejar la salida del componente
    }, []);

    return (
        <div className={`detail ${isVisible ? 'fade-enter-active' : 'fade-exit-active'}`}>
            <h2>Detalles del Proyecto</h2>
            {/* <article>
                <img src="/logo512.png" style={{ viewTransitionName: 'logo-photo' }} />
            </article> */}
            <p>
                Este proyecto fue desarrollado utilizando tecnologías como
                React, Node.js, y otros. El objetivo fue crear una solución
                efectiva para [descripción del objetivo del proyecto].
            </p>
            <p><strong>Características:</strong></p>
            <ul>
                <li>Funcionalidad 1</li>
                <li>Funcionalidad 2</li>
                <li>Funcionalidad 3</li>
            </ul>
            <button onClick={() => window.history.back()}>Volver</button>
        </div>
    );
};

export default Detail;
