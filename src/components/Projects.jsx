import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-aurora projects-aurora--left" aria-hidden="true" />
      <div className="projects-aurora projects-aurora--right" aria-hidden="true" />

      <header className="projects-header">
        <h2 className="section-title" id="projects-title">Trabajos</h2>
      </header>

      <article className="project-card">
        {/* Lienzo de fondo */}
        <div className="project-canvas" aria-hidden="true"></div>

        <div className="project-media">
          <img
            src={`${import.meta.env.BASE_URL}img/Pro-Club.webp`}
            alt="ProClub — captura del sitio web del gimnasio"
            loading="lazy"
          />
        </div>

        <div className="project-content">
          <h3 className="project-title">ProClub</h3>

          <p className="project-lead">
            Diseñamos y desarrollamos el sitio web de ProClub en WordPress para
            brindar una plataforma atractiva, rápida y simple de administrar
            para el gimnasio.
          </p>

          <p className="project-caption">Website Design</p>

          <div className="project-cta">
            <a
              className="project-button"
              href="https://proclub-app.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VER TRABAJO <span className="project-button-arrow">→</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
