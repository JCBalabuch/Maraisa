import { PRODUCTS } from "../../Data/Data";
import "./Gallery.css";

export const gallery = () => {
  return `
      <div id="gallery" class="gallery">
        ${galleryTemplate(PRODUCTS).outerHTML}
      </div>
        `;
};

export const galleryTemplate = (products) => {
  const productsGallery = document.createElement("div");
  productsGallery.id = "productsGallery";
  productsGallery.classList = "productsGallery";

  const ulProductsGallery = document.createElement("ul");
  ulProductsGallery.classList = "ulProductsGallery";

  products.forEach((product) => {
    const liProduct = document.createElement("li");

    const cardProduct = document.createElement("div");
    cardProduct.id = `${product.id}`;
    cardProduct.classList = "cardProduct";

    const nameProduct = document.createElement("h3");
    nameProduct.textContent = product.name;

    const divImgProduct = document.createElement("div");
    divImgProduct.classList = "divImgProduct";

    const imgProduct = document.createElement("img");
    imgProduct.classList = "imgProduct";
    imgProduct.src = product.image;
    imgProduct.alt = product.name;

    const regionProduct = document.createElement("p");
    regionProduct.textContent = product.state;

    const priceProduct = document.createElement("h4");
    priceProduct.textContent = product.price;
    priceProduct.textContent += "$";

    const divBtnsProduct = document.createElement("div");
    divBtnsProduct.classList = "divBtnsProduct";

    const favoriteBtn = document.createElement("button");
    favoriteBtn.id = "favoriteBtn" + product.id;
    favoriteBtn.classList = "favoriteBtn";
    const favoriteImg = document.createElement("img");
    favoriteImg.src = "/Logos/CorazonLleno.png";
    favoriteImg.alt = "Añadir a Favoritos";
    favoriteImg.classList = "favoriteImg";

    const shoppingBtn = document.createElement("button");
    shoppingBtn.id = "shoppingBtn" + product.id;
    shoppingBtn.classList = "shoppingBtn";
    const shoppingImg = document.createElement("img");
    shoppingImg.src = "/Logos/AñadirCesta.png";
    shoppingImg.alt = "Añadir a Cesta";
    shoppingImg.classList = "shoppingImg";

    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(divImgProduct);
    divImgProduct.appendChild(imgProduct);
    cardProduct.appendChild(regionProduct);
    cardProduct.appendChild(priceProduct);
    cardProduct.appendChild(divBtnsProduct);
    divBtnsProduct.appendChild(shoppingBtn);
    divBtnsProduct.appendChild(favoriteBtn);
    shoppingBtn.appendChild(shoppingImg);
    favoriteBtn.appendChild(favoriteImg);
    liProduct.appendChild(cardProduct);
    ulProductsGallery.appendChild(liProduct);
  });
  productsGallery.appendChild(ulProductsGallery);
  return productsGallery;
};


export const toggleFavorite = (element) => {

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Select id Parent Element
  const cardProduct = element.parentElement.parentElement.id;

    // Select button image
    const favoriteImg = element.querySelector(".favoriteImg")

  if (favorites.includes(cardProduct)) {
    favorites = favorites.filter((item) => item !== cardProduct); // Remove product from Local Storage
    favoriteImg.style.filter = "";  // Restore the original color of the button
  } else {
    favorites.push(cardProduct); // Push product to local storage
    favoriteImg.style.filter = "hue-rotate(180deg)"; // change button color to red
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const toggleShopping = (element) => {
  let shopping = JSON.parse(localStorage.getItem("shopping")) || [];

  // Select id Parent Element
  const cardProduct = element.parentElement.parentElement.id;

  // Select button image
  const shoppingImg = element.querySelector(".shoppingImg")

  if (shopping.includes(cardProduct)) {
    shopping = shopping.filter((item) => item !== cardProduct); // Remove product from Local Storage
    shoppingImg.style.filter = "";  // Restore the original color of the button
  } else {
    shopping.push(cardProduct); // Push product to local storage
    shoppingImg.style.filter = "hue-rotate(180deg)"; // change button color to red
  }
  localStorage.setItem("shopping", JSON.stringify(shopping)); 
};