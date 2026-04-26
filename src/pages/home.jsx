import React from 'react';
import Navbar from '../components/navbar/navbar';
import brookeImage from '../assests/brookeHomePage.jpeg';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-main">
        <div className="home-content">
          <div className="home-shape-group">
            <div className="home-half-circle" />
            <h3>Brooke Lesniak</h3>
            <div className="home-rect-bar" />
            <h4>UX/UI | Content Creation | Design</h4>
          </div>
        </div>
        <div className="home-image-wrap">
          <img src={brookeImage} alt="Brooke" className="home-image" />
        </div>
      </div>
      <div className="home-accent-shape" />
    </div>
  );
};

export default Home;