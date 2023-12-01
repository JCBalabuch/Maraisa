import "./Header.css";

const Header = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerLogo = document.createElement("div");
  headerLogo.classList = "headerLogo";

  const headerLogoImg = document.createElement("img");
  headerLogoImg.src = "/Logos/LogoMaraisa.png";
  headerLogoImg.alt = "Logo Maraisa";

  headerLogo.appendChild(headerLogoImg);
  header.appendChild(headerLogo);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const liHome = document.createElement("li");
  const aHome = document.createElement("a");
  aHome.href = "/";
  aHome.textContent = "Home";
  liHome.appendChild(aHome);

  const liProducts = document.createElement("li");
  const aProducts = document.createElement("a");
  aProducts.href = "/products";
  aProducts.textContent = "Products";
  liProducts.appendChild(aProducts);

  const liAbout = document.createElement("li");
  const aAbout = document.createElement("a");
  aAbout.href = "/about";
  aAbout.textContent = "About";
  liAbout.appendChild(aAbout);

  const liMaraisa = document.createElement("li");
  const aMaraisa = document.createElement("a");
  aMaraisa.href = "/maraisa";
  aMaraisa.textContent = "Maraisa";
  liMaraisa.appendChild(aMaraisa);

  const liCopyright = document.createElement("li");
  const aCopyright = document.createElement("a");
  aCopyright.href = "/copyright";
  aCopyright.textContent = "Copyright";
  liCopyright.appendChild(aCopyright);

  const liShopping = document.createElement("li");
  const aShopping = document.createElement("a");
  aShopping.href = "/shopping";
  const shoppingImg = document.createElement("img");
  shoppingImg.src = "/Logos/AñadirCesta.png";
  shoppingImg.alt = "Cesta de Compras";
  aShopping.appendChild(shoppingImg);
  liShopping.appendChild(aShopping);

  const liFavorites = document.createElement("li");
  const aFavorites = document.createElement("a");
  aFavorites.href = "/favorites";
  const favoritesImg = document.createElement("img");
  favoritesImg.src = "/Logos/CorazonLleno.png";
  favoritesImg.alt = "Favoritos";
  aFavorites.appendChild(favoritesImg);
  liFavorites.appendChild(aFavorites);

  ul.appendChild(liHome);
  ul.appendChild(liProducts);
  ul.appendChild(liAbout);
  ul.appendChild(liMaraisa);
  ul.appendChild(liCopyright);
  ul.appendChild(liShopping);
  ul.appendChild(liFavorites);

  nav.appendChild(ul);
  header.appendChild(nav);

  return header;
};

const header = document.querySelector("header");
header.appendChild(Header());

export default Header;

