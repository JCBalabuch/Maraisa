import "./Favorites.css";
import { PRODUCTS } from "../../Data/Data";
import { FavShpGallery } from "../../components/FavShpGallery/FavShpGallery";

const favoritesStorage = () => {
  const favoritesGallery = document.createElement("div");
  favoritesGallery.classList = "favoriteGallery";

  const favoritesGalleryUl = document.createElement("ul");
  favoritesGalleryUl.innerHTML = "";

  // let favoritesInStorage = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoritesInStorage = localStorage.getItem("favorites");

  const favoriteProducts = PRODUCTS.filter((product) =>
    favoritesInStorage.includes(product.id)
  );

  console.log(favoriteProducts);

  const fragment = document.createDocumentFragment();

  favoriteProducts.forEach((product) => {
    const itemFavShp = FavShpGallery(product)
    fragment.appendChild(itemFavShp);
  });

  favoritesGalleryUl.appendChild(fragment);
  favoritesGallery.appendChild(favoritesGalleryUl);

  return favoritesGallery;
};

export const Favorites = () => {
  return `
      <section id="favoritesContainer" class="favoritesContainer">
      <h2>Mis artículos favoritos</h2>
        ${favoritesStorage().outerHTML}
      </section>
        `;
};

export default Favorites;