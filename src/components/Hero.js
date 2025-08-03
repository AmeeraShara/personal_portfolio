import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1> I'm <span className="highlight animated-name">Ameera Shara</span></h1>
        <p className="subtitle">Intern Software Engineer | Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="btn blinking">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
