import React from 'react';
import Navbar from '../components/navbar/navbar';
import brookeAbout from '../assests/brookeAbout.jpeg';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about">
        <div className="about-copy">
          <div className="about-image-side">
            <div className="about-image-stack">
              <img src={brookeAbout} alt="Brooke portrait" className="about-photo about-photo-primary" />
            </div>
          </div>
          <div className="about-text-side">
            <h1>Hi I'm Brooke!</h1>
            <div className="about-text-circle">
              <p>I am a web designer from Orlando who loves to create unique and stylized projects. I love trying new things in order to expand my skillset, scroll to learn more about what I can do!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills-card">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>PHP</li>
            <li>My SQL</li>
            <li>Vs Code</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Premiere</li>
            <li>SEO</li>
            <li>Canva</li>
            <li>Illustrator</li>
            <li>Capcut</li>
            <li>Github</li>
            <li>UI/UX</li>
            <li>WCAG</li>
            <li>Wordpress</li>
            <li>Lightroom</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;