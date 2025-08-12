import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonios" aria-labelledby="testimonial-title">
      <header className="testimonial-header">
        <h2 className="testimonial-title" id="testimonial-title">
          Testimonios
        </h2>
        <p className="testimonial-subtitle">Lo que dicen de nosotros</p>
      </header>

      <div className="testimonial-card">
        <div className="testimonial-copy">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p className="testimonial-text">
            Trabajar con Lorenzo Muñoz ha sido una experiencia excepcional. El crear una app facilitó mi
            sistema de entrenamiento personalizado y ahora todo funciona de manera orgánica y sin el estrés
            de estar agendando cada clase de mis alumnos. Con la app logramos que el gimnasio funcione
            ordenado y los alumnos quedaron muy a gusto con este sistema. Estamos desde ya con la visión de
            mudarnos a una app nativa porque la versión web tuvo tanto éxito que esto nos demanda ir al
            siguiente nivel y obviamente vamos a hacerlo para seguir potenciando la calidad y lo personalizado.
          </p>

          {/* Autor alineado a la derecha */}
          <div className="testimonial-author">
            <span className="author-name">Franco Meloni</span>
            <span className="author-role">CEO de ProClub</span>
          </div>
        </div>

        <div className="testimonial-avatar">
          <div className="avatar-ring">
            <img  src={`${import.meta.env.BASE_URL}img/franco-meloni.webp`} alt="Franco Meloni" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
