import { PRODUCTS } from "../../Data/Data";
import "./Gallery.css";

export const galleryTemplate = (products) => {
  const productsGallery = document.createElement("div");
  productsGallery.id = "productsGallery";
  productsGallery.classList = "productsGallery";

  const ulProductsGallery = document.createElement("ul");
  ulProductsGallery.classList = "ulProductsGallery";

  products.forEach((product) => {
    const liProduct = document.createElement("li");

    const cardProduct = document.createElement("div");
    // cardProduct.id = `product-${product.id}`;
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
    favoriteBtn.id = "favoriteBtn";
    favoriteBtn.classList = "favoriteBtn";
    const favoriteImg = document.createElement("img");
    favoriteImg.src = "/Logos/CorazonLleno.png";
    favoriteImg.alt = "Añadir a Favoritos";

    const shoppingBtn = document.createElement("button");
    shoppingBtn.id = "shoppingBtn";
    shoppingBtn.classList = "shoppingBtn";
    const shoppingImg = document.createElement("img");
    shoppingImg.src = "/Logos/AñadirCesta.png";
    shoppingImg.alt = "Añadir a Cesta";

    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.classList = "removeBtn";
    const removeImg = document.createElement("img");
    removeImg.src = "/Logos/eliminar.png";
    removeImg.alt = "Eliminar";

    cardProduct.appendChild(nameProduct);
    cardProduct.appendChild(divImgProduct);
    divImgProduct.appendChild(imgProduct);
    cardProduct.appendChild(regionProduct);
    cardProduct.appendChild(priceProduct);
    cardProduct.appendChild(divBtnsProduct);
    divBtnsProduct.appendChild(shoppingBtn);
    divBtnsProduct.appendChild(favoriteBtn);
    divBtnsProduct.appendChild(removeBtn);
    shoppingBtn.appendChild(shoppingImg);
    favoriteBtn.appendChild(favoriteImg);
    removeBtn.appendChild(removeImg);
    liProduct.appendChild(cardProduct);
    ulProductsGallery.appendChild(liProduct);
  });
  productsGallery.appendChild(ulProductsGallery);
  return productsGallery;
};

export const gallery = () => {
  return `
      <div id="gallery" class="gallery">
        ${galleryTemplate(PRODUCTS).outerHTML}
      </div>
        `;
};

export const toggleFavorite = (element) => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const cardProduct = element.parentElement.parentElement.id;

  console.log(cardProduct);

  if (favorites.includes(cardProduct)) {
    favorites = favorites.filter((item) => item !== cardProduct);
  } else {
    favorites.push(cardProduct);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const toggleShopping = (element) => {
  let shopping = JSON.parse(localStorage.getItem("shopping")) || [];

  const cardProduct = element.parentElement.parentElement.id;

  console.log(cardProduct);

  if (shopping.includes(cardProduct)) {
    shopping = shopping.filter((item) => item !== cardProduct);
  } else {
    shopping.push(cardProduct);
  }
  localStorage.setItem("shopping", JSON.stringify(shopping));
};