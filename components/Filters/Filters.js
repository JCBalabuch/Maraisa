import { PRODUCTS } from "../../Data/Data";
import { galleryTemplate } from "../Gallery/Gallery";
import "./Filters.css";

export const filtersTemplate = () => {
  const filtersContainer = document.getElementById("productsFilter");
  const nameFilterInput = document.createElement("input");
  nameFilterInput.type = "text";
  nameFilterInput.id = "nameFilter";
  nameFilterInput.placeholder = "Buscar por nombre";
  filtersContainer.appendChild(nameFilterInput);

  const categoryFilterSelect = document.createElement("select");
  categoryFilterSelect.id = "categoryFilter";
  filtersContainer.appendChild(categoryFilterSelect);
  const categoryFilterOption = document.createElement("option");
  categoryFilterOption.value = "";
  categoryFilterOption.textContent = "Todas las categorías";
  categoryFilterSelect.appendChild(categoryFilterOption);

  const stateFilterSelect = document.createElement("select");
  stateFilterSelect.id = "stateFilter";
  filtersContainer.appendChild(stateFilterSelect);
  const stateFilterOption = document.createElement("option");
  stateFilterOption.value = "";
  stateFilterOption.textContent = "Todos los estados";
  stateFilterSelect.appendChild(stateFilterOption);

  const priceFilterInput = document.createElement("input");
  priceFilterInput.type = "number";
  priceFilterInput.id = "priceFilter";
  priceFilterInput.placeholder = "Precio máximo";
  filtersContainer.appendChild(priceFilterInput);

  const clearFiltersButton = document.createElement("button");
  clearFiltersButton.id = "clearFilters";
  clearFiltersButton.textContent = "Limpiar filtros";
  filtersContainer.appendChild(clearFiltersButton);

  return filtersContainer;
};

export const filters = () => {
    return `
        <div id="filters" class="filters">
          ${filtersTemplate().outerHTML}
        </div>
          `;
  };


const getUniqueCategories = () => {
  const categories = PRODUCTS.map((product) => product.category);
  return [...new Set(categories)];
};

const getUniqueStates = () => {
  const states = PRODUCTS.map((product) => product.state);
  return [...new Set(states)];
};

const fillCategories = () => {
  const categorySelect = document.getElementById("categoryFilter");
  const uniqueCategories = getUniqueCategories();

  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
};

const fillStateSelect = () => {
  const stateSelect = document.getElementById("stateFilter");
  const uniqueStates = getUniqueStates();

  uniqueStates.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
};

const clearFilters = () => {
  document.getElementById("nameFilter").value = "";
  document.getElementById("categoryFilter").value = "";
  document.getElementById("stateFilter").value = "";
  document.getElementById("priceFilter").value = "";
  filterProducts();
};

const filterProducts = () => {
  const products = [...PRODUCTS];
  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;
  const stateFilter = document.getElementById("stateFilter").value;
  const priceFilter = document.getElementById("priceFilter").value;

  const filteredProducts = products.filter(product => {
    return (
        (product.name.toLocaleLowerCase().includes(nameFilter) || nameFilter === "") &&
        (product.category === categoryFilter || categoryFilter === "") &&
        (product.state === stateFilter || stateFilter === "") &&
        (product.price <= priceFilter || priceFilter === "")
    )
  })
  galleryTemplate(filteredProducts);
};


document.getElementById("nameFilter").addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("stateFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("input", filterProducts);
document.getElementById("clearFilters").addEventListener("click", clearFilters);

fillCategories();
fillStateSelect();
clearFilters();


