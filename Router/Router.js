import { routes } from "./routes";
import notFound from "../Pages/NotFound/NotFound";

// export const router = () => {
//   const path = window.location.pathname;

//   const { component } = routes.find((route) => route.path === path) || {};

//   if (component) {
//     document.querySelector("main").innerHTML = component();
//   } else {
//     document.querySelector("main").innerHTML = notFound();
//   }
// };

export const router = () => {
  const path = window.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};
  const { handler } = routes.find((route) => route.path === path) || {};

  if (component) {
    document.querySelector("main").innerHTML = component();
    // ! TEST for Products (COMPONENT)
    if (component.toString().includes('id="products"')) {
      component()
    }
    // ! TEST for Products
    // ! TEST for Shopping (.INNERHTML + HANDLER)
      if (component.toString().includes('id="shoppingContainer"')) {
      component()
      handler()
    }
    // ! TEST for Shopping
  } else {
    document.querySelector("main").innerHTML = notFound();
  }
};



window.addEventListener("popstate", router);
