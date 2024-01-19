import "./Favorites.css";
import { PRODUCTS } from "../../Data/Data";
import { favGallery } from "../../components/FavGallery/FavGallery";

const favoritesStorage = () => {
  const favoriteGallery = getFavoriteGallery();
  return favoriteGallery;
};

const getFavoriteGallery = () => {
  const favoritesGallery = document.createElement("div");
  favoritesGallery.classList = "favoriteGallery";

  const favoritesGalleryUl = document.createElement("ul");
  favoritesGalleryUl.innerHTML = "";
  let favoriteProducts = [];

  const favoritesInStorage = localStorage.getItem("favorites");

  if (favoritesInStorage) {
    favoriteProducts = PRODUCTS.filter((product) =>
      favoritesInStorage.includes(product.id)
    );
  } else {
    const noFavoritesMessage = document.createElement("p");
    noFavoritesMessage.textContent = "No tienes productos favoritos";
    favoritesGalleryUl.appendChild(noFavoritesMessage);
  }

  console.log(favoriteProducts);

  const fragment = document.createDocumentFragment();

  favoriteProducts.forEach((product) => {
    const itemFavShp = favGallery(product);
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
