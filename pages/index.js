import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Anzoategui Smart</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="hero">
        <h2>Welcome to Anzoategui Smart</h2>
        <p>Your digital territory awaits.</p>
      </header>
      <section className="digital-territory">
        <h3>Digital Territory</h3>
        <p>Explore the innovation and technology shaping our future.</p>
      </section>
      <section className="metrics">
        <h3>Metrics</h3>
        <ul>
          <li>Users: 1500+</li>
          <li>Projects: 300+</li>
          <li>Partners: 20+</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2026 Anzoategui Smart. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
