import axios from "axios";
import img from "../../../public/img/img-about.jpg";
import { useEffect } from "../../lib";

const ContactAdmin = ({ contact }) => {
  useEffect(() => {
    const formContact = document.getElementById("form--edit");
    const formAdd = document.querySelector(".contactAdd");
    const formPhone = document.querySelector(".contactPhone");
    const formEmail = document.querySelector(".contactEmail");
    const btn = document.querySelector(".btn-about");
    const id = btn.dataset.id;
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        id: id,
        adress: formAdd.value,
        phone: formPhone.value,
        email: formEmail.value,
      };
      axios.put("http://localhost:3000/contacts/" + id, formData);
    });
  });
  return `
  ${contact.map((contact) => {
    return `
        <div class="contactadmin__container">
<div class="contactadmin__title">
<img class="img-contact" src="${img}" alt="" />
<div class="contact-title">
<h1>Nho Giang</h1>
<p>Contact</p>
</div>
</div>
<div class="contactadmin__edit">
  <form action=""  id="form--edit" class="form__about">
      <div class="form--title">
         <p>Edit Contact</p>
         <button data-id="${contact.id}" class="btn-about">Save</button>
    </div>
   <div class="form-input">
    <div class="form-group">
    <label htmlFor="">Location</label> <br />
    <input type="text" class="contactAdd" value="${contact.adress}" />
    </div>
    <div class="form-group">
    <label htmlFor="">Phone Number</label> <br />
    <input type="text" class="contactPhone" value="${contact.phone}" />
    </div>
  
    <div class="form-group">
    <label htmlFor="">
    Email Address</label> <br />
    <input name="" id=""  class="contactEmail" value="${contact.email}" />
    </div>
    
    
    
    </div>

  </form>

</div>

</div>`;
  })}


  `;
};

export default ContactAdmin;
