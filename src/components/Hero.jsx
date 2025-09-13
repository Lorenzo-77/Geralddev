import { useTranslation, Trans } from "react-i18next";
import "./Hero.css";

export default function Hero() {
  useTranslation();
  return (
    <section id="inicio" className="hero-container">
      <h1 className="hero-title">
        <Trans i18nKey="hero.title" components={[
          <span className="celeste" />, // index 0
          <br />,                      // index 1
          <span className="rosa" />    // index 2
        ]} />
      </h1>
      <p className="hero-subtitle">
        <Trans i18nKey="hero.subtitle" />
      </p>
    </section>
  );
}
