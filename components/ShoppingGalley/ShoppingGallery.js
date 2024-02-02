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

    const priceItemDiv = document.createElement("div")
    priceItemDiv.classList = "priceItemDiv";

    const priceItemShp = document.createElement("h4");
    priceItemShp.id = "priceItem";
    priceItemShp.textContent = parseFloat(product.price);

    const priceItemShp$ = document.createElement("h4");
    priceItemShp$.textContent = "$";

    console.log(priceItemShp.textContent);

    const quantityProduct = document.createElement("input");
    quantityProduct.type = "number";
    quantityProduct.id = "quantityProduct";
    quantityProduct.classList = "quantityProduct";
    quantityProduct.min = 1;
    quantityProduct.value = 1;
    // quantityProduct.addEventListener("change", calcSubTotalProduct())
    
    const totalByProductDiv = document.createElement("div")
    totalByProductDiv.classList = "priceItemDiv";

    const totalByProduct = document.createElement("h4");
    totalByProduct.id = "totalByProduct"
    totalByProduct.classList = "totalByProduct"
    // totalByProduct.textContent = parseFloat(priceItemShp.textContent) * parseFloat(quantityProduct.value);

    console.log(totalByProduct.textContent);

    const totalByProduct$ = document.createElement("h4");
    totalByProduct$.textContent = "$";

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

    return itemShp
}


export const calcSubTotalProduct = () => {
    const priceItemShp = document.getElementById("priceItem").textContent;
    const quantityProduct = document.getElementById("quantityProduct").value;
    const total = parseFloat(priceItemShp) * parseFloat(quantityProduct);
    const totalByProduct = document.getElementById("totalByProduct");
    totalByProduct.textContent = total + "$";
        console.log(quantityProduct.value);
}

// calcSubTotalProduct()