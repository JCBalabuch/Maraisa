import "./Home.css";
import { slogan } from "../../Data/Data";

const Home = () => {
  return `
  <div class="homePage">
    <video src="https://www.youtube.com/watch?app=desktop&v=A-7S-VtEP_4" loop controls poster="/Videos/paisajes-venezolanos.webp" playbackRate="1"></video>
    <div class="overlayDiv shapedividers">
        <img src="/Logos/LogoMaraisa.png" alt="Logo Maraisa Tesoros Venezolanos">
        <h1>Maraisa, Tesoros Venezolanos</h1>
        <p>${slogan}</p>
    </div>
</div>
  `
}

  export default Home;