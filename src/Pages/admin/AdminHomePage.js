import axios from "axios";
import "../../../public/style//admin/AdminHome.css";
import AboutAdmin from "../../Components/admin/AboutAdmin";
import FooterAdmin from "../../Components/admin/FooterAdmin";
import HeaderAdmin from "../../Components/admin/Header";
import NavBar from "../../Components/admin/NavBar";
import { useEffect, useState } from "../../lib";

const AdminHomePage = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/abouts")
      .then(({ data }) => setAbouts(data));
  }, []);
  return `
    <div class="container-admin">
        ${NavBar()}
        ${HeaderAdmin()}
        ${AboutAdmin({ abouts: abouts })}
        ${FooterAdmin()}
    
    
    </div>
  `;
};

export default AdminHomePage;
