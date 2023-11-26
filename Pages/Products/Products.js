import "./Products.css"

const Products = () => {
 return `
 Hola desde productos
 `
}

const products = document.querySelector("main");
products.appendChild(Products());

export default Products;
