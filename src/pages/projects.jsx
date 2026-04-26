import React from 'react';
import Navbar from '../components/navbar/navbar';
import inkSeekImg from '../assests/inkSeek.png';
import modesaicImg from '../assests/modesaic.png';
import cutPaperImg from '../assests/cutPaper.jpeg';
import mixedMediaImg from '../assests/mixedMedia.jpeg';
import acrylicImg from '../assests/AcrylicOnCanvas.jpeg';
import './projects.css';

const Projects = () => {
  const webProjects = [
    {
      title: 'InkSeek',
      desc: 'UCF capstone project',
      image: inkSeekImg,
      url: 'https://students.gaim.ucf.edu/~ja768955/DIG4172/inkseek/',
    },
    {
      title: 'Modesaic',
      desc: 'UCF user-centered design project',
      image: modesaicImg,
      url: 'https://www.figma.com/design/fNVQQDjwc0UDD5wR1hOU08/UCD-protoype?node-id=68-2&p=f&t=4xj6WlkquiRsvFn8-0',
    },
  ];

  const artProjects = [
    {
      title: 'Cut Paper',
      desc: 'UCF 2-D design',
      image: cutPaperImg,
    },
    {
      title: 'Mixed Media',
      desc: 'UCF 2-D design',
      image: mixedMediaImg,
    },
    {
      title: 'Acrylic',
      desc: 'UCF 3-D design',
      image: acrylicImg,
    },
  ];

  return (
    <div className="projects-page">
      <Navbar />
      <div className="projects-content">
        <section className="projects-section">
          <h1>Web</h1>
          <div className="projects-grid web-grid">
            {webProjects.map((project, idx) => (
              <div key={idx} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.url} className="test-btn">Test it out!</a>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h1>Art</h1>
          <div className="projects-grid art-grid">
            {artProjects.map((project, idx) => (
              <div key={idx} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
