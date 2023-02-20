import axios from "axios";
import FooterAdmin from "../../Components/admin/FooterAdmin";
import HeaderAdmin from "../../Components/admin/Header";
import NavBar from "../../Components/admin/NavBar";
import { router, useEffect } from "../../lib";

const AdminProjectAdd = () => {
  useEffect(() => {
    const formAdd = document.getElementById("form--add");
    const projectName = document.querySelector(".projectName");
    const projectGit = document.querySelector(".projectGit");
    const projectPre = document.querySelector(".projectPre");
    const projectTime = document.querySelector(".projectTime");
    const projectCate = document.querySelector(".projectCate");
    const projectImg = document.querySelector(".projectImg");
    formAdd.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(projectImg.files);
      const formData = {
        name: projectName.value,
        image: urls,
        hrefgithub: projectGit.value,
        hrefpreview: projectPre.value,
        time: projectTime.value,
        category: projectCate.value,
      };
      axios
        .post("http://localhost:3000/projects", formData)
        .then(() => router.navigate("/admin/project"));
    });
  });
  const uploadFiles = async (files) => {
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
  };
  return `
  <div class="container-admin">
  ${NavBar()}
  ${HeaderAdmin()}
  <div class="contactadmin__container">
  <div class="contactadmin__title">
  <div class="contact-title">
  <h1>Nho Giang</h1>
  <p>Project Add</p>
  </div>
  </div>
  <div class="contactadmin__edit">
    <form action=""  id="form--add" class="form__about">
        <div class="form--title">
           <p>Project Add</p>
           <button class="btn-about">Save</button>
      </div>
     <div class="form-input">
      <div class="form-group">
      <label htmlFor="">Name</label> <br />
      <input type="text" class="projectName"  />
      </div>
      <div class="form-group">
      <label htmlFor="">GitHub</label> <br />
      <input type="text" class="projectGit"  />
      </div>
      <div class="form-group">
      <label htmlFor="">Preview</label> <br />
      <input type="text" class="projectPre"  />
      </div>
      <div class="form-group">
      <label htmlFor="">Time</label> <br />
      <input type="text" class="projectTime"  />
      </div>
      <div class="form-group">
      <label htmlFor="">Image</label> <br />
      <input type="file" class="projectImg"  multiple  />
      </div>
      <div class="form-group">
      <label htmlFor="">Category</label> <br />
      <input name="" id=""  class="projectCate"  />
      </div>
      </div>
 
    </form>
  
  </div>
 
 </div>
  ${FooterAdmin()}


</div>
  `;
};

export default AdminProjectAdd;
