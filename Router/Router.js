import About from "../Pages/About/About";
import Favorites from "../Pages/Favorites/Favorites";
import Home from "../Pages/Home/Home";
import notFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import Shopping from "../Pages/Shopping/Shopping";
import { Copyright } from "../components/Copyright/Copyright";
import { Maraisa } from "../components/Maraisa/Maraisa";

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
    path: "/favorites",
    component: Favorites,
  },
  {
    path: "/shopping",
    component: Shopping,
  },
];

export const router = () => {
  const path = windows.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};

  if (component) {
    document.querySelector("main").innerHTML = component();
    if (path === "/about") {
      document.querySelector("#maraisa").appendChild(Maraisa()) ||
        document.querySelector("#copyright").appendChild(Copyright());
    } else {
      document.querySelector("main").innerHTML = notFound();
    }
  }
};

window.addEventListener("popstate", router);

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
