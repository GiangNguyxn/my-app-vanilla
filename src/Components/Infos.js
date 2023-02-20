import infor from "../../public/img/img-infor.png";
import "../../public/style/Infor.css";
const Infos = (about) => {
  return `
    <div class="infor__container" id="home">

    <div class="infor">
    <div class="infor--title">
                <h6 class="subtitle">hello,I'm</h6>
                ${about
                  .map((about) => {
                    return `
                    <h6 class="title">${about.name}</h6>
                    <p>${about.subtitle}</p>
                    `;
                  })
                  .join("")}
               

                <div class="buttons">
                    <button class="btn btn-primary ">HIRE ME</button>
                    <button class="btn btn-dark ">DOWNLOAD CV</button>
                </div>      

                <div class="socials ">
                    <a class="social-item" href="https://www.facebook.com/giangchuate03/"><i class="ti-facebook"></i></a>
                    <a class="social-item" href="https://github.com/Giangchuate"><i class="ti-github"></i></a>
                    <a class="social-item" href="https://twitter.com/giangchuate"><i class="ti-twitter"></i></a>
                </div>
            </div>              
            <div class="img-infor">
                <img src="${infor}" alt="">
            </div>
    </div>
          <div class="widget">
              <div class="widget-item">
                  <h2>124</h2>
                  <p>Happy Clients</p>
              </div>
              <div class="widget-item">
                  <h2>456</h2>
                  <p>Project Completed</p>
              </div>
              <div class="widget-item">
                  <h2>789</h2>
                  <p>Awards Won</p>
              </div>
          </div>    
    </div>
  `;
};

export default Infos;
