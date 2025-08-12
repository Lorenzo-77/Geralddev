// src/components/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setSending(true);
      setStatus(null);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setStatus({ ok: true, msg: "¡Mensaje enviado! Te respondemos a la brevedad." });
    } catch (err) {
      setStatus({ ok: false, msg: "Error al enviar. Probá otra vez o escribinos por WhatsApp." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="contact-aurora contact-aurora--left" aria-hidden="true" />
      <div className="contact-aurora contact-aurora--right" aria-hidden="true" />

      <header className="contact-header">
        <h2 className="contact-title" id="contact-title">Contacto</h2>
        <p className="contact-subtitle">Escribinos y coordinamos tu proyecto</p>
      </header>

      <div className="contact-grid">
        <aside className="contact-aside">
          <p className="contact-aside-title">Canales directos</p>
          <div className="contact-actions">
            <a
              className="icon-btn"
              href="https://wa.me/5492664952528"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
               <img src={`${import.meta.env.BASE_URL}img/whatsapp.webp`} alt="WhatsApp" />
            </a>

            <a
              className="icon-btn"
              href="mailto:lorenzo.geraldo.munoz@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <img src={`${import.meta.env.BASE_URL}img/gmail.webp`} alt="Gmail" />
            </a>

            <a
              className="icon-btn"
              href="https://www.instagram.com/gerald.dev07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <img src={`${import.meta.env.BASE_URL}img/instagram.webp`} alt="Instagram" />
            </a>
          </div>
        </aside>

        <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="user_name" type="text" placeholder="Tu nombre" required />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="user_email" type="email" placeholder="tu@email.com" required />
          </div>

          <div className="form-field">
            <label htmlFor="service">Interés (opcional)</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>Elegí una opción</option>
              <option value="web">Desarrollo Web</option>
              <option value="ecommerce">Tienda Online</option>
              <option value="landing">Landing / Portfolio</option>
              <option value="custom">Solución Personalizada</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={5} placeholder="Contanos brevemente tu idea…" required />
          </div>

          <button className="contact-submit" type="submit" disabled={sending}>
            {sending ? "Enviando…" : "Enviar mensaje"}
          </button>

          {status && (
            <p className={`contact-status ${status.ok ? "ok" : "err"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
