// src/components/Services.jsx
import './Services.css';

const services = [
  {
    key: 'dev',
    title: 'Desarrollo Web Full Stack',
    img: `${import.meta.env.BASE_URL}img/Desarrollo2.webp`,
    alt: 'Ilustración desarrollo web',
    text:
      'Creación de sitios profesionales, desde desarrollo a medida hasta WordPress. Sitios responsivos, rápidos y seguros, adaptados a tus necesidades.',
  },
  {
    key: 'ecom',
    title: 'Tiendas Online (E-commerce)',
    img:`${import.meta.env.BASE_URL}img/Tiendas2.webp`,
    alt: 'Ilustración tienda online',
    text:
      'Tiendas online optimizadas para convertir, con pasarelas de pago seguras y panel de gestión fácil de usar.',
  },
  {
    key: 'lp',
    title: 'Portfolios y Landing Pages',
    img:`${import.meta.env.BASE_URL}img/Portfolios2.webp`,
    alt: 'Ilustración landing/portfolio',
    text:
      'Landing pages y portfolios impactantes, enfocadas en UX y conversiones para captar clientes o promocionar servicios.',
  },
  {
    key: 'custom',
    title: 'Soluciones Personalizadas',
    img:`${import.meta.env.BASE_URL}img/Soluciones2.webp`,
    alt: 'Ilustración soluciones a medida',
    text:
      'Consultoría y desarrollo a medida: automatizaciones, integraciones y funcionalidades específicas para tu negocio.',
  },
];

export default function Services() {
  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="services-separator" aria-hidden="true" />

      <div className="services-aurora services-aurora--left" aria-hidden="true" />
      <div className="services-aurora services-aurora--right" aria-hidden="true" />

      <header className="services-header">
        <h2 className="services-title" id="services-title">
          Nuestros <span className="celeste">Servicios</span>
        </h2>
        <p className="services-subtitle">Lo que podemos hacer por tu negocio</p>
      </header>

      <div className="services-grid">
        {services.map((s) => (
          <article className="service-card" key={s.key} tabIndex={0}>
            <div className="service-media">
              <img src={s.img} alt={s.alt} loading="lazy" />
            </div>
            <div className="service-content">
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <a className="services-button" href="#contacto">Solicitar presupuesto</a>
      </div>
    </section>
  );
}
