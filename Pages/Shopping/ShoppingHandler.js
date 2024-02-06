export const ShoppingHandlers = () => {
  totalShopping();
};

// Quantity input listeners & calc subTotal product price
const totalShopping = () => {
  let itemsShop = document.querySelectorAll("li.itemShp");
  itemsShop.forEach((item) => {
    item.addEventListener("input", (e) => {
      // Price for item
      let idItemShp = e.target.paretElement.id;
      calcSubTotalProduct(idItemShp);
      // Total Price
      calcTotalPrice();
    });
  });
};

// Function calc subTotal product price
const calcSubTotalProduct = (id) => {
  const priceItemShp = document.getElementById("priceItem").textContent;
  const quantityProduct = document.getElementById("quantityProduct").value;
  const total = parseFloat(priceItemShp) * parseFloat(quantityProduct);
  const totalByProduct = document.querySelector(`[id="${id}] .totalByProduct`);
  totalByProduct.textContent = total;
};

// Function calc total purchase
const calcTotalPrice = () => {
  const allSubTotalItems = document.querySelectorAll(".totalByProduct");
  const totalPurchase = document.querySelector("#totalPurchase");
  let totalPrice = 0;

  allSubTotalItems.forEach((item) => {
    const subTotal = parseFloat(item.textContent);
    if (!isNaN(subTotal)) {
      totalPrice += subTotal;
    }
  });
  totalPurchase.innerText = totalPrice + "$";
};
