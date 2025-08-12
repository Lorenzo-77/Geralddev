// About.jsx
import './About.css'; // podés quitar React: no hace falta importarlo en Vite para JSX

const About = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-image-container">
         <img src={`${import.meta.env.BASE_URL}img/Logo.webp`} alt="Logo Gerald.Dev" className="about-image" />
      </div>

      <div className="about-text">
        <h2 className="about-title">
          Sobre <span className="celeste">Gerald</span><span className="rosa">.Dev</span>
        </h2>

        <p>
          En Gerald.Dev nos encanta convertir ideas en soluciones digitales que realmente sirvan.
          Hacemos desarrollo web y apps mobile a medida, pensadas para potenciar tu negocio y que no tengas
          que andar lidiando con tecnicismos raros.
        </p>
        <p>
          Trabajamos codo a codo con emprendedores y PyMEs, porque entendemos lo que necesitás y sabemos
          cómo llevarlo al siguiente nivel: productos que funcionan, crecen y generan resultados.
        </p>
        <p>
          Nos importa que estés al tanto de todo, por eso mantenemos una comunicación clara, cercana y sin vueltas.
          Acá no sos un número: tu proyecto nos importa y vamos a estar ahí para bancarte en cada paso.
        </p>
        <p>
          Porque si a vos te va bien, a nosotros también.
        </p>
      </div>
    </section>
  );
};

export default About;
