import { about1, about2, about3, maraisa } from "../../Data/Data";
import { openModalCR } from "../../components/Copyright/Copyright";
import { openModalMaraisa } from "../../components/Maraisa/Maraisa";
import "./About.css";


// const About = () => {

//   // const btnModalMaraisa = document.getElementById("openModalMaraisa");
//   // btnModalMaraisa.addEventListener("click", () => openModalMaraisa());
//   // console.log("desde botón maraisa");

//   // const btnModalCopyright = document.getElementById("openModalCR");
//   // btnModalCopyright.addEventListener("click", () => openModalCR());
//   // console.log("desde botón maraisa");


//   return `
//     <div class="about">
//       <div class="aboutImg">
//         <img src="../../public/products/Monagas - Cestería.jpg" alt="Totumas de Anzoategui"/>
//       </div>
//       <h4>${about1}</h4>
//       <h5>${about2}</h5>
//       <h5>${about3}</h5>
//       <div class="divBtns">
//         <button id="openModalMaraisa" class="openModal">Significado de Maraisa</button>
//         <button id="openModalCR" class="openModal">Derechos de Autor</button>
//       </div>
//     </div>
//   `;
// };





const About = () => {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  const aboutImg = document.createElement("div");
  aboutImg.classList.add("aboutImg");

  const img = document.createElement("img");
  img.src = "../../public/products/Delta - Cestería.jpg";
  img.alt = "Cestería Indígena Warao";

  aboutImg.appendChild(img);

  const h4 = document.createElement("h4");
  h4.textContent = about1;

  const h5_1 = document.createElement("h5");
  h5_1.textContent = about2;

  const h5_2 = document.createElement("h5");
  h5_2.textContent = about3;

  const divBtns = document.createElement("div");
  divBtns.className = "divBtns";

  const btnModalMaraisa = document.createElement("button");
  btnModalMaraisa.id = "openModalMaraisa";
  btnModalMaraisa.classList = "openModal";
  btnModalMaraisa.textContent = "Significado de Maraisa";
  btnModalMaraisa.addEventListener("click", () => {
    openModalMaraisa();
    console.log("botón maraisa");
  });

  const btnModalCopyRight = document.createElement("button");
  btnModalCopyRight.id = "openModalCR";
  btnModalCopyRight.classList = "openModal";
  btnModalCopyRight.textContent = "Derechos de Autor";
  btnModalCopyRight.addEventListener("click", () => {
    console.log("botón Copyright");
  });

  divBtns.appendChild(btnModalMaraisa);
  divBtns.appendChild(btnModalCopyRight);

  aboutDiv.appendChild(aboutImg);
  aboutDiv.appendChild(h4);
  aboutDiv.appendChild(h5_1);
  aboutDiv.appendChild(h5_2);
  aboutDiv.appendChild(divBtns);

  return aboutDiv;
};

const about = document.querySelector("main");
about.appendChild(About());

export default about;
