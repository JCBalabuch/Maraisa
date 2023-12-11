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
    liProduct.id = `product-${product.id}`;
    // console.log(liProduct.id);

    const divCard = document.createElement("div");
    divCard.classList = "divCard";

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
    // favoriteBtn.addEventListener("click", () => {
    //   const element = document.getElementById(liProduct.id);
    //   toggleFavorite(element)
    //   console.log(element);
    // })
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

    divCard.appendChild(nameProduct);
    divCard.appendChild(divImgProduct);
    divImgProduct.appendChild(imgProduct);
    divCard.appendChild(regionProduct);
    divCard.appendChild(priceProduct);
    divCard.appendChild(divBtnsProduct);
    divBtnsProduct.appendChild(shoppingBtn);
    divBtnsProduct.appendChild(favoriteBtn);
    divBtnsProduct.appendChild(removeBtn);
    shoppingBtn.appendChild(shoppingImg);
    favoriteBtn.appendChild(favoriteImg);
    removeBtn.appendChild(removeImg);
    liProduct.appendChild(divCard);
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

// export const toggleFavorite = (element) => {
//   let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//   if (favorites.includes(element)) {
//     favorites = favorites.filter((item) => item !== element);
//   } else {
//     favorites.push(element);
//   }
//   localStorage.setItem("favorites", JSON.stringify(favorites));
// };

// export const toggleShopping = (element) => {
//   let shopping = JSON.parse(localStorage.getItem("shopping")) || [];

//   if (shopping.includes(element)) {
//     shopping = shopping.filter((item) => item !== element);
//   } else {
//     shopping.push(element);
//   }
//   localStorage.setItem("shopping", JSON.stringify(shopping));
// };


