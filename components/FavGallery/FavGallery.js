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

    // const quantityProduct = document.createElement("input");
    // quantityProduct.type = "number";
    // quantityProduct.id = "quantityProduct";
    // quantityProduct.classList = "quantityProductFavorites quantityProductShopping";

    const divBtnsItems = document.createElement("div");
    divBtnsItems.classList = "divBtnsItems";

    // const favoriteBtn = document.createElement("button");
    // favoriteBtn.id = "favoriteBtn";
    // favoriteBtn.classList = "favoriteBtnFav favoriteBtnShp";
    // const favoriteImg = document.createElement("img");
    // favoriteImg.src = "/Logos/CorazonLleno.png";
    // favoriteImg.alt = "Añadir a Favoritos";

    const shoppingBtn = document.createElement("button");
    shoppingBtn.id = "shoppingBtn";
    shoppingBtn.classList = "shoppingBtn";
    const shoppingImg = document.createElement("img");
    shoppingImg.src = "/Logos/AñadirCesta.png";
    shoppingImg.alt = "Añadir a Cesta";

    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.classList = "removeBtn";
    const removeImg = document.createElement("img");
    removeImg.src = "/Logos/eliminar.png";
    removeImg.alt = "Eliminar";

    // favoriteBtn.appendChild(favoriteImg);
    shoppingBtn.appendChild(shoppingImg);
    removeBtn.appendChild(removeImg);

    // divBtnsItems.appendChild(favoriteBtn);
    divBtnsItems.appendChild(shoppingBtn);
    divBtnsItems.appendChild(removeBtn);

    divImageItemFavShp.appendChild(imageItemFavShp);
    itemFavShp.appendChild(divImageItemFavShp);
    itemFavShp.appendChild(nameItemFavShp);
    itemFavShp.appendChild(priceItemFavShp);
    // itemFavShp.appendChild(quantityProduct);
    itemFavShp.appendChild(divBtnsItems);

    return itemFavShp
}