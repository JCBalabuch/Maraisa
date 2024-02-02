import { routes } from "./routes";
import notFound from "../Pages/NotFound/NotFound";
import { clearFilters, filterProducts } from "../components/Filters/Filters";
import { toggleFavorite, toggleShopping } from "../components/Gallery/Gallery";
import { calcSubTotalProduct } from "../components/ShoppingGalley/ShoppingGallery";

export const router = () => {
  const path = window.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};

  if (component) {
    document.querySelector("main").innerHTML = component();
  } else {
    document.querySelector("main").innerHTML = notFound();
  }
};

const buttonsAddListeners = () => {
  let favoriteBtns = document.querySelectorAll("#favoriteBtn");
  favoriteBtns.forEach((favoriteBtn) =>
    favoriteBtn.addEventListener("click", () => {
      console.log(favoriteBtn);
      favoriteBtn.addEventListener("click", toggleFavorite(favoriteBtn));
    })
  );

  let shoppingBtns = document.querySelectorAll("#shoppingBtn");
  shoppingBtns.forEach((shoppingBtn) =>
    shoppingBtn.addEventListener("click", () => {
      console.log(shoppingBtn);
      shoppingBtn.addEventListener("click", toggleShopping(shoppingBtn));
    })
  );
};


const subTotalPriceProduct = () => {
  let subTotalProducts = document.querySelectorAll("#totalByProduct");
    subTotalProducts.forEach((subTotalProduct) => 
      subTotalProduct.addEventListener("change", calcSubTotalProduct(subTotalProduct)))
}


// const subTotalPriceProduct = () => {
  
//   let subTotalProducts = document.querySelectorAll("#totalByProduct");
//   subTotalProducts.forEach((subTotalProduct) =>
//   subTotalProduct.addEventListener("change",)

// }

// subTotalProducts.forEach((subTotalProduct) =>
//   subTotalProduct.addEventListener("change", () => {
//     const priceItemShp = document.getElementById("priceItem").textContent;

//     console.log(priceItemShp.textContent)

//     const quantityProduct = document.getElementById("quantityProduct").value;
//     const total = parseFloat(priceItemShp) * parseFloat(quantityProduct);
//     const totalByProduct = document.getElementById("totalByProduct");
//     totalByProduct.textContent = total + "$";
//     console.log(priceItemShp.textContent);
//   })
// );



window.addEventListener("popstate", router);

window.addEventListener("DOMContentLoaded", () => {
  router();
  addListeners();
  buttonsAddListeners();
  subTotalPriceProduct();

  document
    .getElementById("nameFilter")
    .addEventListener("input", filterProducts);
  document
    .getElementById("categoryFilter")
    .addEventListener("change", filterProducts);
  document
    .getElementById("stateFilter")
    .addEventListener("change", filterProducts);
  document
    .getElementById("priceFilter")
    .addEventListener("input", filterProducts);
  document
    .getElementById("clearFilters")
    .addEventListener("click", clearFilters);

});

export const addListeners = () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const href = link.getAttribute("href");
      history.pushState(null, null, href);
      router();
    });
  });
};
