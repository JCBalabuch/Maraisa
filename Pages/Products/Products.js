// import { filters } from "../../components/Filters/Filters";
import { filters } from "../../components/Filters/Filters";
import { gallery } from "../../components/Gallery/Gallery";
import "./Products.css";

const Products = () => {
  return `
    <section id="products" class="products">
        <div id="productsFilter" class="productsFilter">${filters()}</div>
        <div id="productsGallery" class="productsGallery">${gallery()}</div>
    </section>
 `;
};

export default Products;
