import "../../public/style/Project.css";

const Project = ({ projects }) => {
  console.log(projects);
  return `
    <div class="project__container" id="project">
      <div class="project">
       <div class="description">
            <h6 class="subtitle">Project</h6>
            <h6 class="title ">See My Project</h6>
            
        </div>
            <div class="list-project">
            ${projects
              .map((project) => {
                return `
                <div class="item-project">
                <div class="img-wrapper">
                    <img src="${project.image}" alt="">
                    <div class="overlay">
                        <div class="overlay-infos">
                            <h5>${project.name}</h5>
                            <p>${project.category}</p>
                            <p>${project.time}</p>
                            <a href="${project.hrefpreview}"><i class="ti-zoom-in"></i></a>
                            <a href="${project.hrefgithub}"><i class="ti-link"></i></a>
                        </div>  
                    </div>
              </div>        
            </div>
              `;
              })
              .join("")}
              

      


                
                
            </div>

        
      </div>
    </div>
  `;
};

export default Project;
