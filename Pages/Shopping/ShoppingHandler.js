export const ShoppingHandlers = () => {
  totalShopping();
  purchase();
};


// const totalShopping = () => {
//   let itemsShop = document.querySelectorAll("li.itemShp");
//   itemsShop.forEach((item) =>
//     item.addEventListener("input", (e) => {
//       // Price for Item
//       let idItemShp = e.target.parentElement.id;
//       calcSubTotalProduct(idItemShp);
//       // Total Amount
//       calcTotalAmount();
//     })
//   );
// };

const totalShopping = () => {
  let itemsShop = document.querySelectorAll("li.itemShp");
  itemsShop.forEach((item) => {
    item.addEventListener("input", (e) => {
      handleInputChange(e);
    });
    
    // Call handleInputChange for default input value
    handleInputChange({ target: item.querySelector("input") });
  });
};

const handleInputChange = (e) => {
  // Price for Item
  let idItemShp = e.target.parentElement.id;
  calcSubTotalProduct(idItemShp);
  // Total Amount
  calcTotalAmount();
};


// Function calc subTotal product price
const calcSubTotalProduct = (id) => {
  const priceItemShp = document.querySelector(
    `[id="${id}"] #priceItem`
  ).textContent;
  const quantityProduct = document.querySelector(
    `[id="${id}"] #quantityProduct`
  ).value;
  const total = parseFloat(priceItemShp) * parseFloat(quantityProduct);
  const totalByProduct = document.querySelector(`[id="${id}"] .totalByProduct`);
  totalByProduct.textContent = total;
};

// Function calc total purchase
const calcTotalAmount = () => {
  const allSubTotalItems = document.querySelectorAll(".totalByProduct");
  const totalPurchase = document.querySelector("#totalPurchase");
  let totalPrice = 0;

  allSubTotalItems.forEach((item) => {
    const subTotal = parseFloat(item.textContent);
    if (!isNaN(subTotal)) {
      totalPrice += subTotal;
    }
  });
  totalPurchase.innerText = totalPrice + " $";
};

// Purchase Button
const purchase = () => {
  const purchaseBtn = document.querySelector("#purchaseBtn");
  purchaseBtn.addEventListener("click", () => {
    // Clean LocalStorage
    localStorage.setItem("shopping", JSON.stringify([]));

    // Clean Shopping Gallery Container
    const shoppingContainer = document.querySelector(".shoppingContainer");
    shoppingContainer.innerHTML = "";

    // Purchase Message
    const purchaseMessage = document.createElement("p");
    purchaseMessage.classList = "purchaseMessage";
    purchaseMessage.textContent =
      "¡Gracias por llevarte un pedacito de Venezuela a tu casa!";
    shoppingContainer.appendChild(purchaseMessage);
  });
};
