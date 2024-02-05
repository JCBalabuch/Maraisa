import { PRODUCTS } from "../../Data/Data";
import "./Gallery.css";


export const toggleFavorite = (element) => {
  
  console.log(event);
  console.log("togglefavorite ejecutada");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // const favoriteProduct = event.target.closest(".cardProduct").id;
  // const favoriteProduct = event.target.id.split("-")[1];
  const favoriteProduct = element.parentElement.parentElement.id;

  console.log(favoriteProduct);
  if (favorites.includes(favoriteProduct)) {
    favorites = favorites.filter((item) => item !== favoriteProduct);
  } else {
    favorites.push(favoriteProduct);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log(favorites);
};


export const toggleShopping = (element) => {
  let shopping = JSON.parse(localStorage.getItem("shopping")) || [];

  // const shoppingProduct = event.target.closest(".cardProduct").id;
  // const shoppingProduct = event.target.id.split("-")[1];
  const shoppingProduct = element.parentElement.parentElement.id;

  console.log(shoppingProduct);

  if (shopping.includes(shoppingProduct)) {
    shopping = shopping.filter((item) => item !== shoppingProduct);
  } else {
    shopping.push(shoppingProduct);
  }
  localStorage.setItem("shopping", JSON.stringify(shopping));
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
    favoriteBtn.id = "favoriteBtn-" + product.id;
    favoriteBtn.classList = "favoriteBtn";
    const favoriteImg = document.createElement("img");
    favoriteImg.src = "/Logos/CorazonLleno.png";
    favoriteImg.alt = "Añadir a Favoritos";
    favoriteBtn.addEventListener("click", toggleFavorite);
    // favoriteBtn.addEventListener("click", () => {
    //   console.log("hago click en el botón de favoritos")
    // });

    const shoppingBtn = document.createElement("button");
    shoppingBtn.id = "shoppingBtn-"+ product.id;
    shoppingBtn.classList = "shoppingBtn";
    const shoppingImg = document.createElement("img");
    shoppingImg.src = "/Logos/AñadirCesta.png";
    shoppingImg.alt = "Añadir a Cesta";
    shoppingBtn.addEventListener("click", toggleShopping);
    // shoppingBtn.addEventListener("click", () => {
    //   console.log("hago click en el botón de shoping")
    // });

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


export const gallery = () => {
  return `
      <div id="gallery" class="gallery">
      ${galleryTemplate(PRODUCTS).outerHTML}
      </div>
        `;
};







// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("favoriteBtn")) {
//     toggleFavorite(event);
//   }

//   if (event.target.classList.contains("shoppingBtn")) {
//     toggleShopping(event);
//   }
// });