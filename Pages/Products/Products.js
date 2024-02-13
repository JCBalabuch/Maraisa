import "./Products.css";
import {
  galleryTemplate,
  toggleFavorite,
  toggleShopping,
} from "../../components/Gallery/Gallery";
import { PRODUCTS } from "../../Data/Data";

export const Products = () => {
  // Main container
  let main$$ = document.querySelector("main");

  // Products Template
  let productsTemplate = `
    <section id="products" class="products">
        <div id="productsFilter" class="productsFilter filters"></div>
        <div id="productsGallery" class="productsGallery">${galleryTemplate(PRODUCTS).outerHTML}</div>
    </section>
 `;

  main$$.innerHTML = productsTemplate;
  filtersDOM();
};

const filtersDOM = () => {
  // Filters Container
  let container = document.querySelector("#productsFilter");

  // Filters
  createNameFilter(container);
  createCategoryFilter(container);
  createStateFilter(container);
  createPriceFilter(container);
  createClearFiltersButton(container);

  // Card Listeners
  buttonsAddListeners();
};

// FILTERS

// Filter by Name
const createNameFilter = (container) => {
  // Elements
  const nameFilterInput = document.createElement("input");
  nameFilterInput.type = "text";
  nameFilterInput.id = "nameFilter";
  nameFilterInput.placeholder = "Buscar por nombre";

  // Append
  container.appendChild(nameFilterInput);

  // Handlers
  nameFilterInput.addEventListener("input", (e) => {
    filterProducts();
  });
};

// Filter by Category
const createCategoryFilter = (container) => {
  // Elements
  const categoryFilterSelect = document.createElement("select");
  categoryFilterSelect.id = "categoryFilter";

  const categoryFilterOption = document.createElement("option");
  categoryFilterOption.id = "categoryOptions";
  categoryFilterOption.value = "";
  categoryFilterOption.textContent = "Todas las categorías";

  categoryFilterSelect.appendChild(categoryFilterOption);

  // Append
  container.appendChild(categoryFilterSelect);

  // Functionality
  fillCategories(categoryFilterSelect);

  // Handler
  categoryFilterSelect.addEventListener("change", () => {
    filterProducts();
  });
};

const fillCategories = (categorySelect) => {
  const uniqueCategories = getUniqueCategories();

  // Element
  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;

    // Append
    categorySelect.appendChild(option);
  });
};

const getUniqueCategories = () => {
  const categories = PRODUCTS.map((product) => product.category);
  return [...new Set(categories)];
};

// Filter by State
const createStateFilter = (container) => {
  // Elements
  const stateFilterSelect = document.createElement("select");
  stateFilterSelect.id = "stateFilter";

  const stateFilterOption = document.createElement("option");
  stateFilterOption.value = "";
  stateFilterOption.textContent = "Todos los estados";

  stateFilterSelect.appendChild(stateFilterOption);

  // Append
  container.appendChild(stateFilterSelect);

  // Functionality
  fillStateSelect(stateFilterSelect);

  // Handler
  stateFilterSelect.addEventListener("change", () => {
    filterProducts();
  });
};

const fillStateSelect = (stateSelect) => {
  const uniqueStates = getUniqueStates();

  // Element
  uniqueStates.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;

    // Append
    stateSelect.appendChild(option);
  });
};

const getUniqueStates = () => {
  const states = PRODUCTS.map((product) => product.state);
  return [...new Set(states)];
};

// Filter by Price
const createPriceFilter = (container) => {
  // Elements
  const priceFilterInput = document.createElement("input");
  priceFilterInput.type = "number";
  priceFilterInput.id = "priceFilter";
  priceFilterInput.placeholder = "Precio máximo $";
  priceFilterInput.min = 1;

  // Append
  container.appendChild(priceFilterInput);

  // Handler
  priceFilterInput.addEventListener("input", (e) => {
    filterProducts();
  });
};

// Clear Filters
const createClearFiltersButton = (container) => {
  // Elements
  const clearFiltersButton = document.createElement("button");
  clearFiltersButton.id = "clearFilters";
  clearFiltersButton.textContent = "Limpiar filtros";

  // Append
  container.appendChild(clearFiltersButton);

  // Handler
  clearFiltersButton.addEventListener("click", () => {
    clearFilters();
  });
};

const clearFilters = () => {
  document.getElementById("nameFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("stateFilter").value = "";
  document.getElementById("priceFilter").value = "";
  filterProducts();
};

//FUNCTION: Filter products on search function

const filterProducts = () => {
  let productsGallery = document.getElementById("productsGallery");
  productsGallery.innerHTML = "";

  const products = [...PRODUCTS];
  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;
  const stateFilter = document.getElementById("stateFilter").value;
  const priceFilter = document.getElementById("priceFilter").value;

  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLocaleLowerCase().includes(nameFilter) ||
        nameFilter === "") &&
      (product.category === categoryFilter || categoryFilter === "") &&
      (product.state === stateFilter || stateFilter === "") &&
      (product.price <= priceFilter || priceFilter === "")
    );
  });

  // Check if there are filtered products
  if (filteredProducts.length === 0) {
    const message = document.createElement("p");
    message.classList = "message";
    message.textContent =
      "Disculpa, pero no tenemos productos con las características que buscas";
    productsGallery.appendChild(message);
  } else {
    //Append
    productsGallery.appendChild(galleryTemplate(filteredProducts));
  
    //Re-launch Card listeners on filtered products (re-renders)
    buttonsAddListeners();
  }
};

// Card Listeners
export const buttonsAddListeners = () => {
  let favoriteBtns = document.querySelectorAll(".favoriteBtn");
  favoriteBtns.forEach((favoriteBtn) =>
    favoriteBtn.addEventListener("click", () => {
      favoriteBtn.addEventListener("click", toggleFavorite(favoriteBtn));
    })
  );

  let shoppingBtns = document.querySelectorAll(".shoppingBtn");
  shoppingBtns.forEach((shoppingBtn) =>
    shoppingBtn.addEventListener("click", () => {
      shoppingBtn.addEventListener("click", toggleShopping(shoppingBtn));
    })
  );
};
