import { routes } from "/routes";
import notFound from "../Pages/NotFound/NotFound";

export const router = () => {
  const path = window.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};
  const { handler } = routes.find((route) => route.path === path) || {};

  if (component) {
    document.querySelector("main").innerHTML = component();
    // For Products (COMPONENT)
    if (component.toString().includes('id="products"')) {
      component();
    }

    // For Shopping (.InnerHTML + handler)
    if (component.toString().includes('id="shoppingContainer"')) {
      component();
      handler();
    }
  } else {
    document.querySelector("main").innerHTML = notFound();
  }
};

window.addEventListener("popstate", router);
