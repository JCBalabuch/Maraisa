import {
  images,
  imagesLink,
  videoHome,
  videoHomeLink,
  videoModal,
  videoModalLink,
} from "../../Data/Data";
import "./Copyright.css";

export const Copyright = () => {

  return `
    <div class="copyright">
      <section class="sections">
        <img src="/Videos/SaltoAngel.jpg" alt="Salto Ángel"/>
        <div>
          <h4>${videoHome}</h4>
          <a href="${videoHomeLink}" target="_blank">${videoHomeLink}</a>
        </div>
      </section>
      <section class="sections">
        <img src="/Videos/IndigenaTejiendo.png" alt="Indígena Warao Tejiendo"/>
        <div>
          <h4>${videoModal}</h4>
          <a href="${videoModalLink}" target="_blank">${videoModalLink}</a>
        </div>
      </section>
      <section class="sections">
      <img src="/Videos/ArtesanosDeVenezuela.jpg" alt="Parte de la Portada del Libro Artesanos de Venezuela"/>
      <div>
        <h4>${images}</h4>
        <a href="${imagesLink}" target="_blank">${imagesLink}</a>
      </div>
    </section>
    </div>
  `
};

