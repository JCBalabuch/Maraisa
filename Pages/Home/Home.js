import "./Home.css";
import { slogan } from "../../Data/Data";

const Home = () => {
  return `
  <div class="homePage">
  <iframe width="1903" height="750" src="https://www.youtube.com/embed/A-7S-VtEP_4?start=8&end=66" title="Paisajes de Venezuela" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="overlayDiv shapedividers">
        <img src="/Logos/LogoMaraisa.png" alt="Logo Maraisa Tesoros Venezolanos">
        <h1>Maraisa, Tesoros Venezolanos</h1>
        <p>${slogan}</p>
    </div>
</div>
  `
}

  export default Home;