import "./Shopping.css";
import { PRODUCTS } from "../../Data/Data";
import { FavShpGallery } from "../../components/FavShpGallery/FavShpGallery";

const shoppingStorage = () => {
  const shoppingGallery = document.createElement("div");
  shoppingGallery.classList = "shoppingGallery";

  const shoppingGalleryUl = document.createElement("ul");
  shoppingGalleryUl.innerHTML = "";

  // let shoppingInStorage = JSON.parse(localStorage.getItem("shopping")) || [];
  const shoppingInStorage = localStorage.getItem("shopping");

  const shoppingProducts = PRODUCTS.filter((product) =>
    shoppingInStorage.includes(product.id)
  );

  console.log(shoppingProducts);

  const fragment = document.createDocumentFragment();

  shoppingProducts.forEach((product) => {
    const itemFavShp = FavShpGallery(product)
    fragment.appendChild(itemFavShp);
  });

  shoppingGalleryUl.appendChild(fragment);
  shoppingGallery.appendChild(shoppingGalleryUl);

  return shoppingGallery;
};

const Shopping = () => {
  return `
      <section id="shoppingContainer" class="shoppingContainer">
      <h2>Mis compras</h2>
        ${shoppingStorage().outerHTML}
      </section>
        `;
};

export default Shopping;
