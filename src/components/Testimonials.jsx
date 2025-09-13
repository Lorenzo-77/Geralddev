import { useTranslation } from "react-i18next";
import "./Testimonial.css";

export default function Testimonial() {
  const { t } = useTranslation();
  return (
    <section className="testimonial-section" id="testimonios" aria-labelledby="testimonial-title">
      <header className="testimonial-header">
        <h2 className="testimonial-title" id="testimonial-title">
          {t("testimonial.title")}
        </h2>
        <p className="testimonial-subtitle">{t("testimonial.subtitle")}</p>
      </header>

      <div className="testimonial-card">
        <div className="testimonial-copy">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p className="testimonial-text">
            {t("testimonial.text")}
          </p>

          <div className="testimonial-author">
            <span className="author-name">{t("testimonial.author")}</span>
            <span className="author-role">{t("testimonial.role")}</span>
          </div>
        </div>

        <div className="testimonial-avatar">
          <div className="avatar-ring">
            <img src={`${import.meta.env.BASE_URL}img/franco-meloni.webp`} alt="Franco Meloni" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
