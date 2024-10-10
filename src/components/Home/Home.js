import React from 'react';
import Experience from '../Experience/Experience.js';
import Education from '../Education/Education.js';
import Skills from '../Skills/Skills.js';
import AboutMe from '../AboutMe/AboutMe.js';
// import Detail from './Detail.js';

function Home() {
    return (
        <div className="content">
            {/* <img src="/logo512.png" style={{ viewTransitionName: 'logo-photo' }} /> */}

            {/* <Detail /> */}
            <AboutMe />
            <Experience />
            <Education />
            <Skills />
        </div>
    );
}

export default Home;
