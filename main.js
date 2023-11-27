import './style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { addListeners, router } from './Router/Router'


Header();
Footer();

router();
addListeners();