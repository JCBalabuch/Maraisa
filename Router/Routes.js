import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import { Copyright } from "../Pages/Copyright/Copyright";
import { Maraisa } from "../Pages/Maraisa/Maraisa";
import Shopping from "../Pages/Shopping/Shopping";
import Favorites from "../Pages/Favorites/Favorites";
import notFound from "../Pages/NotFound/NotFound";

export const routes = (page) => {

  switch (page) {
    case "/":
      document.querySelector("main").innerHTML = Home();
      break;
    case "/products":
      document.querySelector("main").innerHTML = Products();
      break;
    case "/about":
      document.querySelector("main").innerHTML = About();
      break;
    case "/maraisa":
      document.querySelector("main").innerHTML = Maraisa();
      break;
    case "/copyright":
      document.querySelector("main").innerHTML = Copyright();
      break;
    case "/favorites":
      document.querySelector("main").innerHTML = Favorites();
      break;
    case "/shopping":
      document.querySelector("main").innerHTML = Shopping();
      break;
    default:
      document.querySelector("main").innerHTML = notFound();
      break;
  }
};

window.addEventListener("load", () => {
  routes("/")
})

// export const routes = [
//   {
//     path: "/",
//     component: Home,
//   },
//   {
//     path: "/products",
//     component: Products,
//   },
//   {
//     path: "/about",
//     component: About,
//   },
//   {
//     path: "/maraisa",
//     component: Maraisa,
//   },
//   {
//     path: "/copyright",
//     component: Copyright,
//   },
//   {
//     path: "/favorites",
//     component: Favorites,
//   },
//   {
//     path: "/shopping",
//     component: Shopping,
//   },
// ];
