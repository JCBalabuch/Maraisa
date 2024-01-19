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

    const priceItemShp = document.createElement("h4");
    priceItemShp.textContent = product.price;
    priceItemShp.textContent += "$";

    const quantityProduct = document.createElement("input");
    quantityProduct.type = "number";
    quantityProduct.id = "quantityProduct";
    quantityProduct.classList = "quantityProduct";
    quantityProduct.min = 1;
    quantityProduct.value = 1;

    const divBtnsItems = document.createElement("div");
    divBtnsItems.classList = "divBtnsItems";

    const favoriteBtn = document.createElement("button");
    favoriteBtn.id = "favoriteBtn";
    favoriteBtn.classList = "favoriteBtnFav favoriteBtnShp";
    const favoriteImg = document.createElement("img");
    favoriteImg.src = "/Logos/CorazonLleno.png";
    favoriteImg.alt = "Añadir a Favoritos";

    // const shoppingBtn = document.createElement("button");
    // shoppingBtn.id = "shoppingBtn";
    // shoppingBtn.classList = "shoppingBtnFav shoppingBtnShp";
    // const shoppingImg = document.createElement("img");
    // shoppingImg.src = "/Logos/AñadirCesta.png";
    // shoppingImg.alt = "Añadir a Cesta";

    const removeBtn = document.createElement("button");
    removeBtn.id = "removeBtn";
    removeBtn.classList = "removeBtn";
    const removeImg = document.createElement("img");
    removeImg.src = "/Logos/eliminar.png";
    removeImg.alt = "Eliminar";

    favoriteBtn.appendChild(favoriteImg);
    // shoppingBtn.appendChild(shoppingImg);
    removeBtn.appendChild(removeImg);

    divBtnsItems.appendChild(favoriteBtn);
    // divBtnsItems.appendChild(shoppingBtn);
    divBtnsItems.appendChild(removeBtn);

    divImageItemShp.appendChild(imageItemShp);
    itemShp.appendChild(divImageItemShp);
    itemShp.appendChild(nameItemShp);
    itemShp.appendChild(priceItemShp);
    itemShp.appendChild(quantityProduct);
    itemShp.appendChild(divBtnsItems);

    return itemShp
}