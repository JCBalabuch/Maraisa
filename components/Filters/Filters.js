import { PRODUCTS } from "../../Data/Data";
import { galleryTemplate } from "../Gallery/Gallery";
import "./Filters.css";

export const filtersTemplate = () => {
  return `
    <input type="text" id="nameFilter" placeholder="Buscar por nombre">
    <select id="categoryFilter">
        <option value="">Todas las categorías</option>
    </select>
    <select id="stateFilter">
        <option value="">Todos los estados</option>
    </select>
    <input type="number" id="priceFilter" placeholder="Precio máximo">
    <button id="clearFilters">Limpiar filtros</button>
    `;
};

// const galleryTemplate = (products) => {
//   const galleryDiv = document.getElementById("gallery");
//   galleryDiv.innerHTML = "";
// };

const filterProducts = () => {
  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const categoryFilter = document.getElementById("categoryFilter").value;
  const stateFilter = document.getElementById("stateFilter").value;
  const priceFilter = document.getElementById("priceFilter").value;

  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(nameFilter) || nameFilter === "") &&
      (product.category === categoryFilter || categoryFilter === "") &&
      (product.state === stateFilter || stateFilter === "") &&
      (product.price <= priceFilter || priceFilter === "")
    );
  });

  galleryTemplate(filterProducts);

//   console.log(nameFilter);
//   console.log(categoryFilter);
//   console.log(stateFilter);
//   console.log(priceFilter);
};

const getUniqueCategories = () => {
    const categories = PRODUCTS.map(product => product.category);
    return [... newSet(categories)]
}; 

const getUniqueStates = () => {
    const states = PRODUCTS.map(product => product.state);
    return [... newSet(states)]
};

const fillCategories = () => {
    const categorySelect = document.getElementById("categoryFilter");
    const uniqueCategories = getUniqueCategories();

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option)
    })
};

const fillStateSelect = () => {
    const stateSelect = document.getElementById("stateFilter");
    const uniqueStates = getUniqueStates();

    uniqueStates.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    })
};

const clearFilters = () => {
    document.getElementById("nameFilter").value = "";
    document.getElementById("categoryFilter").value = "";
    document.getElementById("stateFilter").value = "";
    document.getElementById("priceFilter").value = "";

    filterProducts();
}

document.getElementById("nameFilter").addEventListener("input", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("stateFilter").addEventListener("change", filterProducts);
document.getElementById("priceFilter").addEventListener("input", filterProducts);
document.getElementById("clearFilters").addEventListener("click", filterProducts);

fillCategories();
fillStateSelect();