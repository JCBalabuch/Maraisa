import "./Shopping.css";
import { PRODUCTS } from "../../Data/Data";
import { ShpGallery } from "../../components/ShoppingGalley/ShoppingGallery";

const shoppingsStorage = () => {
  const shoppingGallery = getShoppingGallery();
  return shoppingGallery;
}

const getShoppingGallery = () => {
  // Elements
  const shoppingGallery = document.createElement("div");
  shoppingGallery.classList = "shoppingGallery";

  const totalPurchaseDiv = document. createElement("div");
  totalPurchaseDiv.className = ("totalPurchaseDiv");

  const totalPurchaseName = document.createElement("h3");
  totalPurchaseName.className = "totalPurchaseName";
  totalPurchaseName.innerText = "TOTAL";

  const totalPurchase = document.createElement("h3");
  totalPurchase.id = "totalPurchase";
  totalPurchase.className = "totalPurchase";
  totalPurchase.innerText = "0$";

  const shoppingGalleryUl = document.createElement("ul");
  shoppingGalleryUl.innerHTML = "";
  let shoppingProducts = [];

  const shoppingInStorage = localStorage.getItem("shopping");

  if (shoppingInStorage) {
    shoppingProducts = PRODUCTS.filter((product) =>
    shoppingInStorage.includes(product.id)
    );
  } else {
    const noShoppingMessage = document.createElement("p");
    noShoppingMessage.textContent = "No tienes productos en tu cesta";
    shoppingGalleryUl.appendChild(noShoppingMessage);
    totalPurchaseName.style.display = "none";
    totalPurchase.style.display = "none";
  };

  const fragment = document.createDocumentFragment();

  shoppingProducts.forEach((product) => {
    const itemFavShp = ShpGallery(product)
    fragment.appendChild(itemFavShp);
  });

  totalPurchaseDiv.appendChild(totalPurchaseName);
  totalPurchaseDiv.appendChild(totalPurchase);

  shoppingGalleryUl.appendChild(fragment);
  shoppingGallery.appendChild(shoppingGalleryUl);
  shoppingGallery.appendChild(totalPurchaseDiv);

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
