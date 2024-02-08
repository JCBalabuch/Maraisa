import { maraisaMean } from "../../Data/Data";
import "./Maraisa.css";

export const Maraisa = () => {
  return `
  <div class="maraisa">
    <video src="/Videos/Maraisa.mp4" controls autoplay preload="auto"></video>
    <h5>${maraisaMean}</h5>
  </div>
`;
};
