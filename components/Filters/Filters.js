import "./Filters.css";
import { PRODUCTS } from "../../Data/Data";
import { galleryTemplate } from "../Gallery/Gallery";

const filtersTemplate = () => {
  const filtersContainer = document.createElement("div");
  filtersContainer.id = "productsFilter";

  filtersContainer.appendChild(createNameFilter());
  filtersContainer.appendChild(createCategoryFilter());
  filtersContainer.appendChild(createStateFilter());
  filtersContainer.appendChild(createPriceFilter());
  filtersContainer.appendChild(createClearFiltersButton());

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
  categoryFilterOption.value = "";
  categoryFilterOption.textContent = "Todas las categorías";

  categoryFilterSelect.appendChild(categoryFilterOption);

  fillCategories(categoryFilterSelect);

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

// const clearFilters = () => {
//   document.getElementById("nameFilter").value = "";
//   document.getElementById("categoryFilter").value = "";
//   document.getElementById("stateFilter").value = "";
//   document.getElementById("priceFilter").value = "";
//   filterProducts();
// };

// const filterProducts = () => {
//   let productsGallery = document.getElementById("productsGallery");
//   productsGallery.innerHTML = "";

//   const products = [...PRODUCTS];
//   const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
//   const categoryFilter = document.getElementById("categoryFilter").value;
//   const stateFilter = document.getElementById("stateFilter").value;
//   const priceFilter = document.getElementById("priceFilter").value;

//   const filteredProducts = products.filter((product) => {
//     return (
//       (product.name.toLowerCase().includes(nameFilter) ||
//         nameFilter === "") &&
//       (product.category === categoryFilter || categoryFilter === "") &&
//       (product.state === stateFilter || stateFilter === "") &&
//       (product.price <= priceFilter || priceFilter === "")
//     );
//   });

//   productsGallery.appendChild(galleryTemplate(filteredProducts));
// };

// document.addEventListener("DOMContentLoaded", () => {

//   console.log("DOMContentLoaded event fired");

//   const clearFilters = () => {
//     document.getElementById("nameFilter").value = "";
//     document.getElementById("categoryFilter").value = "";
//     document.getElementById("stateFilter").value = "";
//     document.getElementById("priceFilter").value = "";
//     filterProducts();
//   };
//   console.log(document.getElementById("nameFilter").value);

//   const filterProducts = () => {
//     let productsGallery = document.getElementById("productsGallery");
//     productsGallery.innerHTML = "";

//     const products = [...PRODUCTS];
//     const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
//     const categoryFilter = document.getElementById("categoryFilter").value;
//     const stateFilter = document.getElementById("stateFilter").value;
//     const priceFilter = document.getElementById("priceFilter").value;

// console.log(products);

//     const filteredProducts = products.filter((product) => {
//       return (
//         (product.name.toLowerCase().includes(nameFilter) || nameFilter === "") &&
//         (product.category === categoryFilter || categoryFilter === "") &&
//         (product.state === stateFilter || stateFilter === "") &&
//         (product.price <= priceFilter || priceFilter === "")
//       );
//     });

//     productsGallery.appendChild(galleryTemplate(filteredProducts));
//   };

//   const nameFilter = document.getElementById("nameFilter");
//   const categoryFilter = document.getElementById("categoryFilter");
//   const stateFilter = document.getElementById("stateFilter");
//   const priceFilter = document.getElementById("priceFilter");
//   const clearFilterButton = document.getElementById("clearFilterButton");


//   if (nameFilter) {
//     nameFilter.addEventListener("input", filterProducts);
//   }
//   if (categoryFilter) {
//     categoryFilter.addEventListener("change", filterProducts);
//   }
//   if (stateFilter) {
//     stateFilter.addEventListener("change", filterProducts);
//   }
//   if (priceFilter) {
//     priceFilter.addEventListener("change", filterProducts);
//   }
//   if (clearFilterButton) {
//     clearFilterButton.addEventListener("click", clearFilters);
//   }
// });


//? filtros a saco

// // crear arrays vacíos para las iniciales y las ciudades, que son dos tipos de filtros que vamos a tener que rellenar de manera dinámica mediante js, porque no voy a crear cada inicial de una en una en html ni cada ciudad que serían opciones del select.
// const INICIALES = [];
// const CITIES = [];

// // voy guardando cada uno de los posibles valores que quiero filtrar
// let LETRA_SELECCIONADA = "";
// let NAME_VALUE = "";
// let EMAIL_VALUE = "";
// let PHONE_VALUE = "";
// let CITY_VALUE = "";

// // los nuevos usuarios que quiero mostrar
// let USERS_FILTERED = [];

// // declaración
// const filtrar = (array) => {
//   USERS_FILTERED = array.filter(
//     (element) =>
//       element.name[0].includes(LETRA_SELECCIONADA) &&
//       element.name.toLowerCase().includes(NAME_VALUE) &&
//       element.email.toLowerCase().includes(EMAIL_VALUE) &&
//       element.phone.toLowerCase().includes(PHONE_VALUE) &&
//       element.city.includes(CITY_VALUE)
//   );
//   print(USERS_FILTERED);
// };

// // declaración
// const limpiarLetras = () => {
//   // selecciona todas la letras 
//   const allDivs = document.querySelectorAll(".divInicial");
//   // las recorre para acceder a cada una de ellas
//   for (const element of allDivs) {
//     // les cambia el backgroundColor 
//     element.style.backgroundColor = "var(--secondary)";
//   }
// };

// // declaración
// const seleccionarLetra = (letra, div) => {
//   limpiarLetras();
//   // le cambia el backgroundColor a la seleccionada en este momento
//   div.style.backgroundColor = "var(--terciary)";
//   // guardamos el valor en la variable
//   LETRA_SELECCIONADA = letra;
//   // filtramos
//   filtrar(users);
// };

// // declaración
// // vamos a preparar la lógica de las iniciales
// const getIniciales = (usersArray) => {
//   // recorremos todos los usuarios y guardamos las iniciales de cada uno de ellos sin que se repita ninguna
//   for (const user of usersArray) {
//     if (!INICIALES.includes(user.name[0])) {
//       INICIALES.push(user.name[0]);
//     }
//   }

//   INICIALES.sort();

//   // seleccionamos el div donde vamos a pintarlas
//   const inincialesDiv = document.querySelector("#iniciales");

//   // recorremos el array de iniciales y las pintamos
//   for (const inicial of INICIALES) {
//     const divInicial = document.createElement("div");
//     const letra = document.createElement("h3");

//     divInicial.className = "divInicial";
//     letra.textContent = inicial;

//     // le damos la funcionalidad a las iniciales
//     divInicial.addEventListener("click", (e) =>
//       seleccionarLetra(inicial, divInicial)
//     );

//     inincialesDiv.append(divInicial);
//     divInicial.append(letra);
//   }
// };

// // declaración
// const getCities = (usersArray) => {
//   // mismo que getIniciales pero con las ciudades
//   for (const user of usersArray) {
//     if (!CITIES.includes(user.city)) {
//       CITIES.push(user.city);
//     }
//   }

//   CITIES.sort();

//   // selecciono donde las quiero pintar
//   const select = document.querySelector("#city");

//   // recorro el array de ciudades
//   for (const city of CITIES) {
//     /* pinto cada option */
//     select.innerHTML += `<option value="${city}">${city}</option>`;
//   }
// };

// // declaración
// const print = (array) => {
//   // seleccionamos el div donde queremos pintar los usuarios filtrados o todos los usuarios
//   const usersContainer = document.querySelector("#usersContainer");

//   // lo primero que añado es un div con todas las propiedades que van a tener los usuarios, a nivel informativo
//   usersContainer.innerHTML = `
//     <div class="info">
//         <h3>Nombre</h3>
//         <p>Email</p>
//         <p>Teléfono</p>
//         <p>Ciudad</p>
//         <p>Trabajo</p>
//     </div>
// `;

//   // si no he encontrado ningún usuario con esas características muestro un h4 informativo de que no coincide
//   if (!array.length) {
//     usersContainer.innerHTML += `
//         <h4 class="notFound">No se han encontrado usuarios con esos filtros</h4>
//     `;
//   }

//   // en el caso de que si que tenga recorro el array y pinto cada uno de ellos
//   for (const element of array) {
//     usersContainer.innerHTML += `
//         <div class="user">
//             <h3>${element.name}</h3>
//             <p>${element.email}</p>
//             <p>${element.phone}</p>
//             <p>${element.city}</p>
//             <p>${element.job}</p>
//         </div>
//     `;
//   }
// };

// // selector del párrafo mostrar, lo selecciono porque quiero que cuando le hagan click "abra" el div de los filtros para poder utilizarlos
// const pMostrar = document.querySelector(".mostrar");

// // declaración
// // cambiar una clase a un div y cambiar el texto a un párrafo
// const abrir = () => {
//   // seleccionar el div de los filtros
//   const filters = document.querySelector("#filters");

//   // preguntar que clase tiene para saber que texto poner
//   if (filters.className !== "abierto") {
//     // si está abierto ponermos cerrar Filtros
//     pMostrar.textContent = "Cerrar Filtros";
//   } else {
//     // si no está abierto ponermos mostrar filtros
//     pMostrar.textContent = "Mostrar Filtros";
//   }

//   // cambiar la clase abierto a filters, ponerla o quitarla dependiendo de si la tiene o no
//   filters.classList.toggle("abierto");
// };

// // añadimos al párrafo seleccionado previamente el escuchador de eventos click para que cuando le hagan click ejecute la función abrir
// pMostrar.addEventListener("click", abrir);

// // selectores de los filtros
// const inputName = document.querySelector("#name");
// const inputEmail = document.querySelector("#email");
// const inputPhone = document.querySelector("#phone");
// const selectCity = document.querySelector("#city");

// const getValue = (variable, input) => {
//   let value = input.value.toLowerCase();

//   if (variable === "name") {
//     NAME_VALUE = value;
//   } else if (variable === "email") {
//     EMAIL_VALUE = value;
//   } else if (variable === "phone") {
//     PHONE_VALUE = value;
//   } else {
//     CITY_VALUE = input.value;
//   }

//   filtrar(users);
// };

// inputName.addEventListener("input", () => getValue("name", inputName));
// inputEmail.addEventListener("input", () => getValue("email", inputEmail));
// inputPhone.addEventListener("input", () => getValue("phone", inputPhone));
// selectCity.addEventListener("change", () => getValue("city", selectCity));

// getIniciales(users);
// getCities(users);
// // el primer pintado de usuarios sin filtrar ni nada
// print(users);

// // seleccionamos el botón de limpiar
// const limpiarButton = document.querySelector("#limpiar");

// const limpiar = () => {
//   // resetea TODOS los valores
//   LETRA_SELECCIONADA = "";
//   NAME_VALUE = "";
//   EMAIL_VALUE = "";
//   PHONE_VALUE = "";
//   CITY_VALUE = "";
//   inputEmail.value = "";
//   inputName.value = "";
//   inputPhone.value = "";
//   limpiarLetras();
//   selectCity.value = "Abernathyside";
//   // pinta con todos los usuarios
//   print(users);
// };

// // cuando hagamos click llamamos a la función limpiar
// limpiarButton.addEventListener("click", limpiar);