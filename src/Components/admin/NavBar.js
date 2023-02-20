import "../../../public/style/admin/Adminnav.css";
import logo from "../../../public/img/logo.png";
const NavBar = () => {
  return `
  <aside class="navbar__container">
        <div class="nav--header">
        <a href="/"> <img src="${logo}" alt="" /></a>
        </div>
        <div class="navBar-nav">
           <ul class="list--nav">
             <li class="item--nav">
             <a href="/admin"><i class="ti-user"></i> About</a>
             </li>
             <li class="item--nav">
             <a href="/admin/project"><i class="ti-folder"></i> Project</a>
             </li>
             <li class="item--nav">
             <a href="/admin/contact"><i class="ti-view-grid"></i> Contact</a>
             </li>
             <li class="item--nav">
             <a href=""><i class="ti-pencil-alt"></i> Service</a>
             </li>
             <li class="item--nav">
             <a href=""><i class="ti-layers"></i> Skills</a>
             </li>
             
           
           </ul>
        
        </div>
  
  
  
  </aside>
   
  `;
};

export default NavBar;
