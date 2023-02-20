import "../../public/style/Skill.css";
import imgcss from "../../public/img/css-img.png";
import imghtml from "../../public/img/html-img.png";
import imgphp from "../../public/img/php-img.png";
import imgjs from "../../public/img/js.jfif";
import imgwr from "../../public/img/wr.png";
const Skill = () => {
  return `
    <div class="skill__container" id="skill">
    <div class="skill ">
    <div class="description">
    <h6 class="subtitle">Skills</h6>
    <h6 class="title ">Why Choose me</h6>
   
    </div>
   

    <div class="list--language">
       <div class="item--img">
       <img src="${imgjs}" alt="" />
       </div>
       <div class="item--img">
       <img src="${imghtml}" alt="" />
       </div>
       <div class="item--img">
       <img src="${imgcss}" alt="" />
       </div>
       <div class="item--img">
       <img src="${imgphp}" alt="" />
       </div>
       <div class="item--img">
       <img src="${imgwr}" alt="" />
       </div>
       
        
       
    </div>  
</div>
    
    
    </div>
  `;
};

export default Skill;
