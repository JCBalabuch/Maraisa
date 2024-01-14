import { PRODUCTS } from "../../Data/Data";
import { galleryTemplate } from "../../components/Gallery/Gallery";
import "./Favorites.css";


const favoritesStorage = () => {

  const favoritesGallery = document.createElement("div");
  favoritesGallery.classList = "favoriteGallery";

  const favoritesGalleryUl = document.createElement("ul");

  // let favoritesInStorage = JSON.parse(localStorage.getItem("favorites")) || [];  
  const favoritesInStorage = localStorage.getItem("favorites");

  // favoritesContainer.innerHTML = "";

  const favoriteProducts = PRODUCTS.filter((product) =>
    favoritesInStorage.includes(product.id)
  );

  console.log(favoriteProducts);

  favoriteProducts.forEach((favoriteProduct) => {
    const favoriteItem = document.createElement("li");
    favoriteItem.id = `${favoriteProduct.id}`;
    favoriteItem.classList = "favoriteItem";

    const divFavoriteItemImage = document.createElement("div");
    divFavoriteItemImage.classList = "divFavoriteItemImage";

    const favoriteItemImage = document.createElement("img");
    favoriteItemImage.classList = "favoriteItemImage";
    favoriteItemImage.src = favoriteProduct.image;
    favoriteItemImage.alt = favoriteProduct.name;


    divFavoriteItemImage.appendChild(favoriteItemImage);
    favoriteItem.appendChild(divFavoriteItemImage);
    favoritesGalleryUl.appendChild(favoriteItem);
  });

  favoritesGallery.appendChild(favoritesGalleryUl);

  return favoritesGallery;
  // return `
  // Hola desde Favorites
  // `;
};

const favoritesInStorage = localStorage.getItem("favorites");

const favoriteProducts = PRODUCTS.filter((product) =>
favoritesInStorage.includes(product.id)
);

export const Favorites = () => {
  return `
      <section id="favoritesContainer" class="favoritesContainer">
      <h3>Mis artículos favoritos</h3>
        ${galleryTemplate(favoriteProducts).outerHTML}
      </section>
        `;
};



export default Favorites;

// //TODO - para hacer los favoritos
// //   const favoritesInStorage = localStorage.getItem("bbddFavorites");
// // const addToFavorite = () => {}


// export const Favorite = () => {
//   let favoritesInStorage = JSON.parse(localStorage.getItem("favorites")) || [];
//   // const favoritesInStorage = localStorage.getItem("favorites");

//   console.log(favoritesInStorage);

//   // Obtener el elemento del DOM donde pintar los favoritos
//   const favoritesContainer = document.getElementById("favorites-container");

//   // Limpiar el contenedor
//   favoritesContainer.innerHTML = "";

//   // Filtrar los productos que tienen el id en el array de favoritos
//   const favoriteProducts = PRODUCTS.filter((product) =>
//     favoritesInStorage.includes(product.id)
//   );


//   // Recorrer los productos favoritos y renderizarlos
//   favoriteProducts.forEach((favoriteProduct) => {
//     const favoriteElement = document.createElement("div");
//     favoriteElement.textContent = favoriteProduct.name;

//     // Renderizar los favoritos en el contenedor
//     favoritesContainer.appendChild(favoriteElement);
//   });
// };

