import "./Shopping.css";
import { PRODUCTS } from "../../Data/Data";
import { ShpGallery } from "../../components/ShoppingGalley/ShoppingGallery";

const shoppingsStorage = () => {
  const shoppingGallery = getShoppingGallery();
  return shoppingGallery;
}

const getShoppingGallery = () => {
  const shoppingGallery = document.createElement("div");
  shoppingGallery.classList = "shoppingGallery";

  const shoppingGalleryUl = document.createElement("ul");
  shoppingGalleryUl.innerHTML = "";
  let shoppingProducts = [];

  // let shoppingInStorage = JSON.parse(localStorage.getItem("shopping")) || [];
  const shoppingInStorage = localStorage.getItem("shopping");

  if (shoppingInStorage) {
    shoppingProducts = PRODUCTS.filter((product) =>
    shoppingInStorage.includes(product.id)
    );
  } else {
    const noShoppingMessage = document.createElement("p");
    noShoppingMessage.textContent = "No tienes productos en tu cesta";
    shoppingGalleryUl.appendChild(noShoppingMessage);
  };

  console.log(shoppingProducts);

  const fragment = document.createDocumentFragment();

  shoppingProducts.forEach((product) => {
    const itemFavShp = ShpGallery(product)
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
        ${shoppingsStorage().outerHTML}
      </section>
        `;
};

export default Shopping;
