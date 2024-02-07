import "./FavGallery.css";

export const favGallery = (product) => {

    const itemFavShp = document.createElement("li");
    itemFavShp.id = `${product.id}`;
    itemFavShp.classList = "itemFavShp";

    const divImageItemFavShp = document.createElement("div");
    divImageItemFavShp.classList = "divImageItemFavShp";

    const imageItemFavShp = document.createElement("img");
    imageItemFavShp.classList = "imageItemFavShp";
    imageItemFavShp.src = product.image;
    imageItemFavShp.alt = product.name;

    const nameItemFavShp = document.createElement("h3");
    nameItemFavShp.textContent = product.name;

    const priceItemFavShp = document.createElement("h4");
    priceItemFavShp.textContent = product.price;
    priceItemFavShp.textContent += "$";

    const divBtnsItems = document.createElement("div");
    divBtnsItems.classList = "divBtnsItems";

    const removeBtn = document.createElement("button");
    removeBtn.classList = "removeBtnFav";
    const removeImg = document.createElement("img");
    removeImg.src = "/Logos/eliminar.png";
    removeImg.alt = "Eliminar";

    removeBtn.appendChild(removeImg);

    divBtnsItems.appendChild(removeBtn);

    divImageItemFavShp.appendChild(imageItemFavShp);
    itemFavShp.appendChild(divImageItemFavShp);
    itemFavShp.appendChild(nameItemFavShp);
    itemFavShp.appendChild(priceItemFavShp);
    itemFavShp.appendChild(divBtnsItems);

    removeButtonsAddListeners();

    return itemFavShp
}

export const removeButtonsAddListeners = () => {
    const removeBtns = document.querySelectorAll(".removeBtnFav");
    removeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        deleteItem(this, "favorites");
      });
    });
  };
  
  export const deleteItem = (element, arrayName) => {
    const cardProduct = element.parentElement.parentElement.id;
    let array = JSON.parse(localStorage.getItem(arrayName)) || [];
  
    array = array.filter((item) => item !== cardProduct);
  
    localStorage.setItem(arrayName, JSON.stringify(array));
  
    favGallery(array)
  };