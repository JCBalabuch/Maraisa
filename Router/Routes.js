import About from "../Pages/About/About";
import { Copyright } from "../Pages/Copyright/Copyright";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import { Maraisa } from "../Pages/Maraisa/Maraisa";
import { Products } from "../Pages/Products/Products";
import Shopping from "../Pages/Shopping/Shopping";


export const routes = [
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