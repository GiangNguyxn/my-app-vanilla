import "../../../public/style/admin/AdminProject.css";
import { useEffect, useState } from "../../lib";
import axios from "axios";
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/projects")
      .then(({ data }) => setProjects(data));
  }, []);
  useEffect(() => {
    const btnRemove = document.querySelectorAll(".btn-remove");
    btnRemove.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const newprojects = projects.filter((project) => project.id != id);
        setProjects(newprojects);
        axios.delete("http://localhost:3000/projects/" + id, newprojects);
      });
    });
  });
  return `
    <div class="projectadmin__container">
    <div class="title">
    <h1>Project/</h1>
    <a href="/admin/project/add" class="addproject">Add Project</a>
    </div>
        
        <div class="projectAdmin">
          <table class="table__projects">
          <thead>
                <tr class="list--table">
                    <th>Name</th>
                    <th>Image</th>
                    <th>Github</th>
                    <th>Preview</th>
                    <th>Time</th>
                    <th>Category</th>
                    <th>Option</th>
                  
                  </tr>
                  
          </thead>
             
              <tbody>
              ${projects.map((project) => {
                return `
                <tr class="list--table">
                  <td>${project.name}</td>
                  <td><img src="${project.image}" alt="" class="table--img" /></td>
                  <td>${project.hrefgithub}</td>
                  <td>${project.hrefpreview}</td>
                  <td>${project.time}</td>
                  <td>${project.category}</td>
                  <td><Button data-id="${project.id}" class="btn-remove">Remove</Button>  <a href="/admin/project/${project.id}/edit" class="project-edit">Edit</a></td>
                  
                  
                  
                  </tr>
                `;
              })}
                  
              
              
              </tbody>
              
          
          
          
          
          </table>
        
        </div>
    </div>
    
  `;
};

export default Project;
