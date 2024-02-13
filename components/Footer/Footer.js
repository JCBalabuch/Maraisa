import "./Footer.css";

const Footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const footerRRSS = document.createElement("div");
  footerRRSS.classList.add("footerRRSS");

  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/in/jenifferbalabuch/";
  linkedinLink.target = "_blank";

  const linkedinLogo = document.createElement("img");
  linkedinLogo.src = "/Logos/linkedin.png";
  linkedinLogo.alt = "Logo Linkedin";

  linkedinLink.appendChild(linkedinLogo);
  footerRRSS.appendChild(linkedinLink);

  const jcbsLogo = document.createElement("img");
  jcbsLogo.src = "/Logos/LogoJCBS.png";
  jcbsLogo.alt = "Logo JCBS";
  footerRRSS.appendChild(jcbsLogo);

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/JCBalabuch";
  githubLink.target = "_blank";

  const githubLogo = document.createElement("img");
  githubLogo.src = "/Logos/github.png";
  githubLogo.alt = "Logo Github";

  githubLink.appendChild(githubLogo);
  footerRRSS.appendChild(githubLink);

  footer.appendChild(footerRRSS);

  const creator = document.createElement("div");
  creator.classList.add("creator");

  const createdBy = document.createElement("p");
  createdBy.textContent = "Created by JCBS for";

  const rtcLogo = document.createElement("img");
  rtcLogo.src = "/Logos/RockTheCodeLogo.webp";
  rtcLogo.alt = "Logo Rock the Code";

  creator.appendChild(createdBy);
  creator.appendChild(rtcLogo);

  footer.appendChild(creator);

  return footer;
};

const footer = document.querySelector("footer");
footer.appendChild(Footer());


export default Footer;
