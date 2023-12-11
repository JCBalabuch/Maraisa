import "./Filters.css";
import { PRODUCTS } from "../../Data/Data";
import { galleryTemplate } from "../Gallery/Gallery";

export const filtersTemplate = () => {
  const filtersContainer = document.createElement("div");
  filtersContainer.id = "productsFilter";

  filtersContainer.append(createNameFilter());
  filtersContainer.append(createCategoryFilter());
  filtersContainer.append(createStateFilter());
  filtersContainer.append(createPriceFilter());
  filtersContainer.append(createClearFiltersButton());

  return filtersContainer;
};

export const filters = () => {
  return `
      <div id="filters" class="filters">
        ${filtersTemplate().innerHTML}
      </div>
    `;
};

const createNameFilter = () => {
  const nameFilterInput = document.createElement("input");
  nameFilterInput.type = "text";
  nameFilterInput.id = "nameFilter";
  nameFilterInput.placeholder = "Buscar por nombre";

  return nameFilterInput;
};

const createCategoryFilter = () => {
  const categoryFilterSelect = document.createElement("select");
  categoryFilterSelect.id = "categoryFilter";

  const categoryFilterOption = document.createElement("option");
  categoryFilterOption.id = "categoryOptions";
  categoryFilterOption.value = "";
  categoryFilterOption.textContent = "Todas las categorías";

  categoryFilterSelect.appendChild(categoryFilterOption);

  fillCategories(categoryFilterSelect);

  categoryFilterSelect.addEventListener("change", () => {
    console.log(categoryFilterSelect.value);
  });

  return categoryFilterSelect;
};

const createPriceFilter = () => {
  const priceFilterInput = document.createElement("input");
  priceFilterInput.type = "number";
  priceFilterInput.id = "priceFilter";
  priceFilterInput.placeholder = "Precio máximo $";

  return priceFilterInput;
};

const createStateFilter = () => {
  const stateFilterSelect = document.createElement("select");
  stateFilterSelect.id = "stateFilter";

  const stateFilterOption = document.createElement("option");
  stateFilterOption.value = "";
  stateFilterOption.textContent = "Todos los estados";

  stateFilterSelect.appendChild(stateFilterOption);

  fillStateSelect(stateFilterSelect);

  return stateFilterSelect;
};

const createClearFiltersButton = () => {
  const clearFiltersButton = document.createElement("button");
  clearFiltersButton.id = "clearFilters";
  clearFiltersButton.textContent = "Limpiar filtros";

  return clearFiltersButton;
};

const getUniqueCategories = () => {
  const categories = PRODUCTS.map((product) => product.category);
  return [...new Set(categories)];
};

const fillCategories = (categorySelect) => {
  const uniqueCategories = getUniqueCategories();

  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;

    categorySelect.appendChild(option);
  });
};

const getUniqueStates = () => {
  const states = PRODUCTS.map((product) => product.state);
  return [...new Set(states)];
};

const fillStateSelect = (stateSelect) => {
  const uniqueStates = getUniqueStates();

  uniqueStates.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;

    stateSelect.appendChild(option);
  });
};

export const clearFilters = () => {
  document.getElementById("nameFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("stateFilter").value = "";
  document.getElementById("priceFilter").value = "";
  filterProducts();
};

export const filterProducts = () => {
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

  productsGallery.appendChild(galleryTemplate(filteredProducts));
};
