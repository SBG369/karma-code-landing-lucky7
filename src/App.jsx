
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Karma Kartel</h1>
        <h2>The Code for Living</h2>
        <p>
          Cut through life’s chaos — one principle at a time. Build strength,
          resilience, and peace through powerful tools for body and mind.
        </p>
      </header>

      <section className="products">
        <div className="product-card">
          <h3>The Karma Code</h3>
          <p>
            7 Laws of Personal Change. A complete framework for mental clarity,
            emotional control, and personal transformation.
          </p>
          <a
            href="https://thekarmacode-48.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Explore The Code
          </a>
        </div>

        <div className="product-card">
          <h3>Mobility After 40</h3>
          <p>
            Restore your movement, reclaim your strength, and move like you
            used to. Programs, nutrition, and routines built for real results.
          </p>
          <a
            href="https://mobilityafter40.lovable.app/presales"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            Discover Mobility
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Follow Karma Kartel</p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/karmakartelseries"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@karmakartelofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            href="https://www.youtube.com/@karmakartelofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
        <p className="tagline">
          Truth is a fire. Walk through it — and rise.
        </p>
      </footer>
    </div>
  );
}
