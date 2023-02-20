import axios from "axios";
import { router } from "../lib";
import "../../public/style/Signin.css";
import { useEffect, useState } from "../lib";
const SigninPage = () => {
  useEffect(() => {
    const formSigin = document.querySelector(".signin-form");
    const formEmail = document.querySelector(".form-email");
    const formPass = document.querySelector(".form-pass");
    const Email = "nhogiang03tg@gmail.com";
    formSigin.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        email: formEmail.value,
        password: formPass.value,
      };
      axios.post("http://localhost:3000/signin", formData).then(({ data }) => {
        data.user.email == Email
          ? router.navigate("/admin")
          : console.log("huhuhuh");
      });
    });
  });
  return `
  
    <div class="signin__container">
    <div class="signin-header">
         <div class="href">
         <a href="/"><i class="ti-home"></i> Home</a>
         </div>
         <div class="href">
         <a href="/signup"><i class="ti-key"></i>Sign Up</a>
         </div>
         
    </div>
    <div class="signin__form-container">
    <div class="singin--title">
    Sign In
    </div>
    <form action="" class="signin-form">
       <input type="text"  placeholder="abc@gmail.com" class="form-email" />
       <input type="password"  placeholder="Password" class="form-pass" />
       <button>Sign In</button>

    </form>
    <div class="messenger">
    Don't have an account? Sign up
    </div>
    
    
    
    </div>
    <div class="signin__img-container">
    <div class="bg-signin"></div>
    
    </div>
     


    </div>
  `;
};

export default SigninPage;
