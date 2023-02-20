import "../../../public/style/admin/Adminabout.css";
import { useEffect } from "../../lib";
import axios from "axios";
const AboutAdmin = ({ abouts }) => {
  useEffect(() => {
    const formAbout = document.getElementById("form--edit");
    const aboutName = document.querySelector(".aboutName");
    const aboutSubtitle = document.querySelector(".aboutSubtitle");
    const aboutImg = document.querySelector(".aboutImg");
    const description = document.querySelector(".Description");
    const btn = document.querySelector(".btn-about");
    const id = btn.dataset.id;
    formAbout.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(aboutImg.files);
      const formData = {
        id: id,
        name: aboutName.value,
        subtitle: aboutSubtitle.value,
        image: urls,
        description: description.value,
      };
      axios.put(`http://localhost:3000/abouts/` + id, formData).then(() => {
        console.log(`Successfully`);
      });
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dbktpvcfz";
      const PRESET_NAME = "demo-upload";
      const FOLDER_NAME = "ECMA";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);
      for (const file of files) {
        formData.append("file", file);

        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  return `

    
       
       ${abouts
         .map((about) => {
           return `
           <div class="contactadmin__container">
     <div class="contactadmin__title">
     <img class="img-contact" src="${about.image}" alt="" />
     <div class="contact-title">
     <h1>Nho Giang</h1>
     <p>About</p>
     </div>
     </div>

     <div class="contactadmin__edit">
       <form action=""  id="form--edit" class="form__about">
           <div class="form--title">
              <p>Edit About</p>
              <button data-id="${about.id}" class="btn-about">Save</button>
         </div>
        <div class="form-input">
         <div class="form-group">
         <label htmlFor="">Name</label> <br />
         <input type="text" class="aboutName" value="${about.name}" />
         </div>
         <div class="form-group">
         <label htmlFor="">Subtitle</label> <br />
         <input type="text" class="aboutSubtitle" value="${about.subtitle}" />
         </div>
         <div class="form-group">
         <label htmlFor="">Image</label> <br />
         <input type="file" class="aboutImg"  multiple  />
         </div>
         <div class="form-group">
         <label htmlFor="">Description</label> <br />
         <input name="" id=""  class="Description" value="${about.description}" />
         </div>
         
         
         
         </div>
        `;
         })
         .join("")}
       </form>
     
     </div>
    
    </div>
  `;
};

export default AboutAdmin;
