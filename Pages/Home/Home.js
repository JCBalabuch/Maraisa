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

// const homeContainer = () => {
//     const homePage = document.createElement("div");
//     homePage.classList.add("homePage");
  
//     const videoHome = document.createElement("video");
//     videoHome.src = "/Videos/VideoInicial.mp4#t=0008,105";
//     // videoHome.autoplay = true;
//     videoHome.loop = true;
//     videoHome.controls = true;
//     videoHome.poster = "../../public/Videos/paisajes-venezolanos.webp";
//     videoHome.playbackRate = 1;
  
//     const overlayDiv = document.createElement("div");
//     overlayDiv.classList.add("overlayDiv");
//     overlayDiv.classList.add("shapedividers");
  
//     const logo = document.createElement("img");
//     logo.src = "/Logos/LogoMaraisa.png";
//     logo.alt = "Logo Maraisa Tesoros Venezolanos";
  
//     const pageTitle = document.createElement("h1");
//     pageTitle.textContent = "Maraisa, Tesoros Venezolanos";
  
//     const pageDescription = document.createElement("p");
//     pageDescription.textContent = slogan;
  
//     overlayDiv.appendChild(logo);
//     overlayDiv.appendChild(pageTitle);
//     overlayDiv.appendChild(pageDescription);
  
//     homePage.appendChild(videoHome);
//     homePage.appendChild(overlayDiv);

//     videoHome.addEventListener("ended", () => {
//         videoHome.muted = true;
//       });
  
//     return homePage;
//   };
  
//   const Home = document.querySelector("main");
//   Home.appendChild(homeContainer());

  export default Home;