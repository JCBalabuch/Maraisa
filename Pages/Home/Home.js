import { slogan } from "../../Data/Data";
import "./Home.css";

const Home = () => {
    const homePage = document.createElement("div");
    homePage.classList.add("homePage");
  
    const videoHome = document.createElement("video");
    videoHome.src = "/Videos/VideoInicial.mp4#t=0008,105";
    // videoHome.autoplay = true;
    videoHome.loop = true;
    videoHome.controls = true;
    videoHome.poster = "../../public/Videos/paisajes-venezolanos.webp";
    videoHome.playbackRate = 1;
  
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlayDiv");
    overlayDiv.classList.add("shapedividers");
  
    const logo = document.createElement("img");
    logo.src = "/Logos/LogoMaraisa.png";
    logo.alt = "Logo Maraisa Tesoros Venezolanos";
  
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Maraisa, Tesoros Venezolanos";
  
    const pageDescription = document.createElement("p");
    pageDescription.textContent = slogan;
  
    overlayDiv.appendChild(logo);
    overlayDiv.appendChild(pageTitle);
    overlayDiv.appendChild(pageDescription);
  
    homePage.appendChild(videoHome);
    homePage.appendChild(overlayDiv);

    videoHome.addEventListener("ended", () => {
        videoHome.muted = true;
      });
  
    return homePage;
  };
  
  const homeContainer = document.querySelector("main");
  homeContainer.appendChild(Home());

  export default Home;