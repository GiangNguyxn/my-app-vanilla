import axios from "axios";
import ContactAdmin from "../../Components/admin/ContactAdmin";
import FooterAdmin from "../../Components/admin/FooterAdmin";
import HeaderAdmin from "../../Components/admin/Header";
import NavBar from "../../Components/admin/NavBar";
import { useEffect, useState } from "../../lib";

const AdminContacts = () => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/contacts")
      .then(({ data }) => setContact(data));
  }, []);
  return `
  <div class="container-admin">
  ${NavBar()}
  ${HeaderAdmin()}
  ${ContactAdmin({ contact: contact })}
  ${FooterAdmin()}


</div>
  `;
};

export default AdminContacts;
