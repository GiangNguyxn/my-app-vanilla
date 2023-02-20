import axios from "axios";
import "../../public/style/Signup.css";
import { router, useEffect } from "../lib";
const SignupPage = () => {
  useEffect(() => {
    const formSignup = document.querySelector(".form-signup");
    const formUsername = document.querySelector(".form-name");
    const formEmail = document.querySelector(".form-email");
    const formPass = document.querySelector(".form-pass");
    formSignup.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        username: formUsername.value,
        email: formEmail.value,
        password: formPass.value,
      };
      axios.post("http://localhost:3000/signup", formData).then(() => {
        router.navigate("/signin");
      });
    });
  });
  return `
    <div class="signup__container">
      <div class="signup--header">
      <span class="signup-bg"></span>
      <h1 class="signup--title">Welcome!</h1>
      </div>
      <div class="form__signup--container">
      <div class="formsignup--title">
      Register with
      </div>
      <form action="" class="form-signup">
         <input type="text" placeholder="Username" class="form-name" />
         <input type="text" placeholder="Email" class="form-email" />
         <input type="password" placeholder="Password" class="form-pass" />
         <button>Sign Up</button>
         <div class="messenger">Already have an account?    <a href="/signin">Sign in</a></div>
      
      
      </form>
      
      </div>
    
    
    </div>
  `;
};

export default SignupPage;
