import "./Favorites.css";
// import { PRODUCTS } from "./Data.js";


const Favorites = () => {
  return `
  Hola desde Favorites
  `;
};

export default Favorites;

//TODO - para hacer los favoritos
//   const favoritesInStorage = localStorage.getItem("bbddFavorites");
// const addToFavorite = () => {}


export const renderFavorites = () => {
  let favoritesIds = JSON.parse(localStorage.getItem("favorites")) || [];

  // Obtener el elemento del DOM donde pintar los favoritos
  const favoritesContainer = document.getElementById("favorites-container");

  // Limpiar el contenedor
  favoritesContainer.innerHTML = "";

  // Filtrar los productos que tienen el id en el array de favoritos
  const favoriteProducts = PRODUCTS.filter((product) =>
    favoritesIds.includes(product.id)
  );

  // Recorrer los productos favoritos y renderizarlos
  favoriteProducts.forEach((favoriteProduct) => {
    const favoriteElement = document.createElement("div");
    favoriteElement.textContent = favoriteProduct.name;

    // Renderizar los favoritos en el contenedor
    favoritesContainer.appendChild(favoriteElement);
  });
};

