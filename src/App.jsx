import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="glow-overlay"></div>
        <div className="content">
          <h1 className="title">Karma Kartel</h1>
          <p className="tagline">The Truth Lives Here</p>
          <p className="subtext">
            Live your code. Transform your life. <br />
            The Karma Code is your framework for strength, clarity, and inner peace.
          </p>
          <div className="buttons">
            <a
              href="https://thekarmacode-48.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="cta"
            >
              The Karma Code
            </a>
            <a
              href="https://mobilityafter40.lovable.app/presales"
              target="_blank"
              rel="noopener noreferrer"
              className="cta secondary"
            >
              Mobility After 40
            </a>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>About Karma Kartel</h2>
        <p>
          Karma Kartel is more than a brand — it’s a movement. 
          We turn timeless wisdom into cinematic storytelling. 
          Every short we release carries one mission: to cut through noise and deliver truth. 
          No gurus. No hype. Just clarity and power.
        </p>
      </section>

      <footer>
        <p>© 2025 Karma Kartel | The Truth Lives Here</p>
      </footer>
    </div>
  );
}

