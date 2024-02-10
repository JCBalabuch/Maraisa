import { getShoppingGallery } from "../../Pages/Shopping/Shopping";
import { ShoppingHandlers } from "../../Pages/Shopping/ShoppingHandler";
import "./ShoppingGallery.css";

export const ShpGallery = (product) => {
  const itemShp = document.createElement("li");
  itemShp.id = `${product.id}`;
  itemShp.classList = "itemShp";

  const divImageItemShp = document.createElement("div");
  divImageItemShp.classList = "divImageItemShp";

  const imageItemShp = document.createElement("img");
  imageItemShp.classList = "imageItemShp";
  imageItemShp.src = product.image;
  imageItemShp.alt = product.name;

  const nameItemShp = document.createElement("h3");
  nameItemShp.textContent = product.name;

  const priceItemDiv = document.createElement("div");
  priceItemDiv.classList = "priceItemDiv";

  const priceItemShp = document.createElement("h4");
  priceItemShp.id = "priceItem";
  priceItemShp.textContent = parseFloat(product.price);

  const priceItemShp$ = document.createElement("h4");
  priceItemShp$.textContent = " $";

  const quantityProduct = document.createElement("input");
  quantityProduct.type = "number";
  quantityProduct.id = "quantityProduct";
  quantityProduct.classList = "quantityProduct";
  quantityProduct.min = 1;
  quantityProduct.defaultValue = 1;

  const totalByProductDiv = document.createElement("div");
  totalByProductDiv.classList = "priceItemDiv";

  const totalByProduct = document.createElement("h4");
  totalByProduct.id = "totalByProduct";
  totalByProduct.classList = "totalByProduct";

  const totalByProduct$ = document.createElement("h4");
  totalByProduct$.textContent = " $";

  const divBtnsItems = document.createElement("div");
  divBtnsItems.classList = "divBtnsItems";

  const removeBtn = document.createElement("button");
  removeBtn.classList = "removeBtnShp";
  const removeImg = document.createElement("img");
  removeImg.src = "/Logos/eliminar.png";
  removeImg.alt = "Eliminar";

  removeBtn.appendChild(removeImg);

  divBtnsItems.appendChild(removeBtn);

  priceItemDiv.appendChild(priceItemShp);
  priceItemDiv.appendChild(priceItemShp$);

  totalByProductDiv.appendChild(totalByProduct);
  totalByProductDiv.appendChild(totalByProduct$);

  divImageItemShp.appendChild(imageItemShp);
  itemShp.appendChild(divImageItemShp);
  itemShp.appendChild(nameItemShp);
  itemShp.appendChild(priceItemDiv);
  itemShp.appendChild(quantityProduct);
  itemShp.appendChild(totalByProductDiv);
  itemShp.appendChild(divBtnsItems);

  return itemShp;
};

// Listeners

export const shoppingRemoveButtons = () => {
  const removeBtns = document.querySelectorAll(".removeBtnShp");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      deleteItemShp(this, "shopping");
    });
  });
};

// Functionality

const deleteItemShp = (element, arrayName) => {
  const cardProduct = element.parentElement.parentElement.id;
  let array = JSON.parse(localStorage.getItem(arrayName)) || [];

  array = array.filter((item) => item !== cardProduct);

  localStorage.setItem(arrayName, JSON.stringify(array));

  const shoppingGallery = document.querySelector(".shoppingGallery");
  shoppingGallery.innerHTML = "";
  shoppingGallery.appendChild(getShoppingGallery(array));

  ShoppingHandlers();
  shoppingRemoveButtons();
};
