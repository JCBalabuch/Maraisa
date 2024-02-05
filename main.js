import './style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { routes } from './Router/Routes'
import { toggleFavorite, toggleShopping } from './components/Gallery/Gallery';
// import { allListeners } from './components/Listeners/Listeners';


Header();
Footer();

routes();

// document.addEventListener("DOMContentLoaded", () => {

//     document.getElementById('parentElement').addEventListener('click', function(event) {
//         if (event.target.classList.contains('favoriteBtn')) {
//           // Lógica para el botón favorito
//           console.log('Botón Favorito clickeado');
//         } else if (event.target.classList.contains('shoppingBtn')) {
//           // Lógica para el botón comprar
//           console.log('Botón Comprar clickeado');
//         }
//       });
      


//     // const favoriteBtn = document.querySelector(".favoriteBtn");
//     // const shoppingBtn = document.querySelector(".shoppingBtn");
  
//     // console.log(favoriteBtn);

//     // if (favoriteBtn) {
//     //   favoriteBtn.addEventListener("click", toggleFavorite);
//     // }
  
//     // if (shoppingBtn) {
//     //   shoppingBtn.addEventListener("click", toggleShopping);
//     // }
//   });
  