import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import { Maraisa } from "../Pages/Maraisa/Maraisa";
import { Copyright } from "../Pages/Copyright/Copyright";
import Favorites from "../Pages/Favorites/Favorites";
import Shopping from "../Pages/Shopping/Shopping";
import notFound from "../Pages/NotFound/NotFound";
import { clearFilters, filterProducts } from "../components/Filters/Filters";
import { toggleFavorite } from "../components/Gallery/Gallery";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/maraisa",
    component: Maraisa,
  },
  {
    path: "/copyright",
    component: Copyright,
  },
  {
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/shopping",
    component: Shopping,
  },
];

export const router = () => {
  const path = window.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};

  if (component) {
    document.querySelector("main").innerHTML = component();
  } else {
    document.querySelector("main").innerHTML = notFound();
  }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  router();
  addListeners();

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


    let favoriteBtns = document.querySelectorAll("#favoriteBtn");
    favoriteBtns.forEach((favoriteBtn) => 
    // favoriteBtn.addEventListener("click", () => {
    //   console.log(favoriteBtn)
    // })
    favoriteBtn.addEventListener("click", toggleFavorite(favoriteBtn))
    )

    let shoppingBtns = document.querySelectorAll(".shoppingBtn");
    shoppingBtns.forEach((shoppingBtn) => 
    shoppingBtn.addEventListener("click", () => {
        console.log(shoppingBtn)
      })
    )
    // let favoritesBtn = document.querySelectorAll(".favoriteBtn");
// // console.log(favorites);
// favoritesBtn.forEach((favorite) =>
// favoritesBtn.addEventListener("click", () => {
//     console.log(favorite.id)
//     // let element = document.getElementById(element.id);
//     // console.log(element);
//     // toggleFavorite(element.id)
//   })
// );

// let favorites = document.querySelectorAll(".favoriteBtn");
// console.log(favorites);
// favorites.forEach((img) =>
//   img.addEventListener("click", (e) => {
//     console.log(`Card clicked: ${e.target.getAttribute("alt")}`);
//     console.log(`Card clicked: ${e}`);
//   })
// );





    
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

//TODO - para hacer los favoritos y la cesta
// let favorites = document.querySelectorAll(".favoriteBtn");
// console.log(favorites);
// favorites.forEach((img) =>
//   img.addEventListener("click", (e) => {
//     console.log(`Card clicked: ${e.target.getAttribute("alt")}`);
//     console.log(`Card clicked: ${e}`);
//   })
// );

// let favoritesBtn = document.querySelectorAll(".favoriteBtn");
// // console.log(favorites);
// favoritesBtn.forEach((favorite) =>
// favoritesBtn.addEventListener("click", () => {
//     console.log(favorite.id)
//     // let element = document.getElementById(element.id);
//     // console.log(element);
//     // toggleFavorite(element.id)
//   })
// );
