import logo from "../../public/img/logo.png";
import { NavBar } from "./NavBar";
import "../../public/style/Header.css";
import { useEffect } from "../lib";
const Header = () => {
  useEffect(() => {
    const header = document.querySelector(".header__container");
    window.addEventListener("scroll", () => {
      window.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
    });
  });

  return `
  <div class="header__container">
  <header >
  <div class="logo">
  <img src="${logo}" alt="" />
  </div>
  <div class="nav-container">
  ${NavBar()}
  </div>
 </header>
  </div>
   
  `;
};

export default Header;
