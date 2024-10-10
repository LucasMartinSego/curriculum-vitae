import React from 'react';
import Experience from './Experience.js';
import Education from './Education.js';
import Skills from './Skills.js';
import AboutMe from './AboutMe.js';
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
