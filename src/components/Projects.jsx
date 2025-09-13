import { useTranslation } from "react-i18next";
import "./Projects.css";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="proyectos" aria-labelledby="projects-title">
      <div className="projects-aurora projects-aurora--left" aria-hidden="true" />
      <div className="projects-aurora projects-aurora--right" aria-hidden="true" />

      <header className="projects-header">
        <h2 className="section-title" id="projects-title">{t('projects.title')}</h2>
      </header>

      <article className="project-card">
        <div className="project-canvas" aria-hidden="true"></div>

        <div className="project-media">
          <img
            src={`${import.meta.env.BASE_URL}img/Pro-Club.webp`}
            alt="ProClub — captura del sitio web del gimnasio"
            loading="lazy"
          />
        </div>

        <div className="project-content">
          <h3 className="project-title">{t('projects.proclub.title')}</h3>

          <p className="project-lead">{t('projects.proclub.desc')}</p>

          <p className="project-caption">{t('projects.proclub.caption')}</p>

          <div className="project-cta">
            <a
              className="project-button"
              href="https://proclub-app.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('projects.proclub.button')} <span className="project-button-arrow">→</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
