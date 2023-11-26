import { maraisaMean } from "../../Data/Data";
import "./Maraisa.css";

export const Maraisa = () => {
  const main = document.querySelector("main");

  const maraisa = document.createElement("div");
  maraisa.id = "maraisa";
  maraisa.classList.add("maraisa");
  main.appendChild(maraisa);
    // document.body.appendChild(maraisa);

  const maraisaContent = document.createElement("div");
  maraisaContent.classList.add("maraisa-content");
  maraisa.appendChild(maraisaContent);

  const closeButton = document.createElement("button");
  closeButton.id = "closeBnt";
  const imgCloseBtn = document.createElement("img");
  imgCloseBtn.src = "/Logos/cerrar-sesion.png";
  imgCloseBtn.alt = "Close Button";
  closeButton.appendChild(imgCloseBtn);
  maraisaContent.appendChild(closeButton);

  closeButton.addEventListener("click", () => {maraisa.style.display = "none"})

  const video = document.createElement("video");
  video.id = "video";
  video.src = "/Videos/Maraisa.mp4";
  video.autoplay = false;
  video.controls = true;
  maraisaContent.appendChild(video);

  const textoExplicativo = document.createElement("p");
  textoExplicativo.id = "textoExplicativo";
  textoExplicativo.style.display = "none";
  textoExplicativo.textContent = maraisaMean;
  maraisaContent.appendChild(textoExplicativo);

  video.addEventListener("ended", () => {
    video.style.display = "none";
    textoExplicativo.style.display = "block";
  });
};

export const openModalMaraisa = () => {
  const modalMaraisa = document.querySelector("#maraisa");
  console.log("desde maraisa")
  modalMaraisa.style.display = "block";
}
