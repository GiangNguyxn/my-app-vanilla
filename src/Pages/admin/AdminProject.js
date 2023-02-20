import "../../../public/style//admin/AdminHome.css";
import FooterAdmin from "../../Components/admin/FooterAdmin";
import HeaderAdmin from "../../Components/admin/Header";
import NavBar from "../../Components/admin/NavBar";
import Project from "../../Components/admin/Project";

const AdminProject = () => {
  return `
    <div class="container-admin">
        ${NavBar()}
        ${HeaderAdmin()}
        ${Project()}
       ${FooterAdmin()}
    
    
    </div>
  `;
};

export default AdminProject;
