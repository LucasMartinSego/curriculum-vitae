import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import CardSlider from './components/Responsive Card Slider/CardSlider';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          <Chatbot />
          <CardSlider />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
