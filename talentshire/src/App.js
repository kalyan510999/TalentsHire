import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">TALENTSHIRE</div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Services</li>
            <li>Consulting</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="navbar-button">Get Started</button>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1>TALENTSHIRE</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/400x250"
            alt="Tablet showing healthcare data"
          />
        </div>
      </main>

      <section className="wave-section">
        <div className="wave-content">
          <h2>Constructive Healthcare</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
            amet eros blandit.
          </p>
          <button className="play-button">Play Video</button>
        </div>
      </section>
    </div>
  );
}

export default App;
