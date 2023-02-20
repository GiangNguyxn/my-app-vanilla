import "../../public/style/About.css";
import aboutimg from "../../public/img/img-about.jpg";
const About = ({ abouts }) => {
  return `
  ${abouts
    .map((about) => {
      return `<div class="about__container" id="about">
    <div class="about">
     <div class="about--img">
       <img src="${about.image}" alt="${about.image}" />
     </div>
     
     <div class="about--description">
     <h6 class="title">${about.name}</h6>
                   <p class="subtitle">${about.subtitle}</p>
                   <p class="description">${about.description}</p>
                   
                   <button class="btn btn-primary ">DOWNLOAD CV</button>    
     
     
     </div>
    
    
    </div>
   
   
   </div> `;
    })
    .join("")}
    
  `;
};

export default About;
