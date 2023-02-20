import axios from "axios";
import "../../public/style/Header.css";
import { useEffect, useState } from "../lib";

export const NavBar = () => {
  const [nav, setNavs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/navs").then(({ data }) => setNavs(data));
  }, []);
  return `
    
    
    <nav class="menu__container">
      <ul class="list--menu">
      ${nav
        .map((nav) => {
          return `
           <li class="item-menu"><a href="${nav.href}">${nav.name}</a></li>
           `;
        })
        .join("")}
        
      
      </ul>
    
    </nav>
    
  `;
};
