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
  const main = document.querySelector("main");

  const copyright = document.createElement("div");
  copyright.id = "copyright";
  copyright.classList = "copyright";
  main.appendChild(copyright);

  const copyrightContent = document.createElement("div");
  copyrightContent.classList.add("copyrightContent");
  copyright.appendChild(copyrightContent);

  const closeButton = document.createElement("button");
  closeButton.id = "closeBnt";
  const imgCloseBtn = document.createElement("img");
  imgCloseBtn.src = "/Logos/cerrar-sesion.png";
  imgCloseBtn.alt = "Close Button";
  closeButton.appendChild(imgCloseBtn);
  copyrightContent.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    copyright.style.display = "none";
  });

  const videoHomeCR = document.createElement("div");
  videoHomeCR.classList = "sections";

  const videoHomeImg = document.createElement("img");
  videoHomeImg.src = "/Videos/SaltoAngel.jpg";
  videoHomeImg.alt = "Salto Ángel";
  videoHomeCR.appendChild(videoHomeImg);

  const videoHomeText1 = document.createElement("div");
  videoHomeText1.classList = "videoHomeTexts";

  const videoHomeName = document.createElement("h4");
  videoHomeName.textContent = videoHome;
  videoHomeText1.appendChild(videoHomeName);

  const videoHomeLnk = document.createElement("a");
  videoHomeLnk.textContent = videoHomeLink;
  videoHomeText1.appendChild(videoHomeLnk);

  videoHomeCR.appendChild(videoHomeText1);

  const videoModalCR = document.createElement("div");
  videoModalCR.classList = "sections";

  const videoModalImg = document.createElement("img");
  videoModalImg.src = "/Videos/IndigenaTejiendo.png";
  videoModalImg.alt = "Indígena Warao Tejiendo";
  videoModalCR.appendChild(videoModalImg);

  const videoHomeText2 = document.createElement("div");
  videoHomeText2.classList = "videoHomeTexts";

  const videoModalName = document.createElement("h4");
  videoModalName.textContent = videoModal;
  videoHomeText2.appendChild(videoModalName);

  const videoModalLnk = document.createElement("a");
  videoModalLnk.textContent = videoModalLink;
  videoHomeText2.appendChild(videoModalLnk);

  videoModalCR.appendChild(videoHomeText2);

  const imagesCR = document.createElement("div");
  imagesCR.classList = "sections";

  const imagesImg = document.createElement("img");
  imagesImg.src = "/Videos/ArtesanosDeVenezuela.png";
  imagesImg.alt = "Parte de la Portada del Libro Artesanos de Venezuela";
  imagesCR.appendChild(imagesImg);

  const videoHomeText3 = document.createElement("div");
  videoHomeText3.classList = "videoHomeTexts";

  const imagesCRName = document.createElement("h4");
  imagesCRName.textContent = images;
  videoHomeText3.appendChild(imagesCRName);

  const imagesCRLnk = document.createElement("a");
  imagesCRLnk.textContent = imagesLink;
  videoHomeText3.appendChild(imagesCRLnk);

  imagesCR.appendChild(videoHomeText3);

  copyrightContent.appendChild(videoHomeCR);
  copyrightContent.appendChild(videoModalCR);
  copyrightContent.appendChild(imagesCR);
};

export const openModalCR = () => {
  const modalCR = document.querySelector("#copyright");
  console.log("desde copyright")
  modalCR.style.display = "block";
}
