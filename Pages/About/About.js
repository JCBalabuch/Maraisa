import { about1, about2, about3, maraisa } from "../../Data/Data";
import "./About.css";

const About = () => {
  return `
    <div class="about">
      <div class="aboutImg">
        <img src="/products/Delta - Cestería.jpg" alt="Cestería Indígena Warao"/>
      </div>
      <h4>${about1}</h4>
      <h5>${about2}</h5>
      <h5>${about3}</h5>
    </div>
  `;
};

export default About;
