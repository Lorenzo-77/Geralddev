import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section
      className="projects-section"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      {/* auroras suaves de fondo */}
      <div
        className="projects-aurora projects-aurora--left"
        aria-hidden="true"
      />
      <div
        className="projects-aurora projects-aurora--right"
        aria-hidden="true"
      />

      <header className="projects-header">
        <h2 className="section-title" id="projects-title">
          Proyectos
        </h2>
      </header>

      {/* Card ProClub */}
      <article className="project-card">
        <div className="project-media">
          <img
              src={`${import.meta.env.BASE_URL}img/Pro-Club.webp`}
            alt="ProClub — captura del sitio web del gimnasio"
            loading="lazy"
          />
        </div>

        <div className="project-content">
          <h3 className="project-title">
            ProClub — <span className="celeste">Sitio</span> y gestión para{" "}
            <span className="rosa">gimnasio</span>
          </h3>

          <div className="badge-row">
            <span className="badge">WordPress</span>
            <span className="badge">Membresías & Reservas</span>
            <span className="badge">Responsive</span>
          </div>

          <p className="project-lead">
            Diseñamos y desarrollamos el sitio web de ProClub en WordPress para
            brindar una plataforma atractiva, rápida y simple de administrar
            para el gimnasio.
          </p>

          <div className="project-cta">
            <a
              className="project-button"
              href="https://proclub-app.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar sitio
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
