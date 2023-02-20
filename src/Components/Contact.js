import "../../public/style/Contact.css";

const Contact = (contact) => {
  return `<div class="contact__container" id="contact">
  <div class="contact ">
  <div class="description">
  <h6 class="subtitle">Contact</h6>
  <h6 class="title mb-4">Get In Touch With Me</h6>
  
  </div>
  

  <div class="contact-form ">
      <div class="form">
          <h6 class="subtitle">Available 24/7</h6>
          <h6 class="title">Get In Touch</h6>
          <form>
              <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
              </div>
              <div class="form-group">
                  <textarea name="contact-message" id="" cols="40" rows="5" class="form-control" placeholder="Message"></textarea>
              </div>
              <button type="submit" class="btn ">Send Message</button>
          </form>
      </div>
      ${contact
        .map((contact) => {
          return `
          <div class="contact-infos">
          <div class="item">
              <i class="ti-location-pin"></i>
              <div class="">
                  <h5>Location</h5>
                  <p>${contact.adress} </p>
              </div>                          
          </div>
          <div class="item">
              <i class="ti-mobile"></i>
              <div>
                  <h5>Phone Number</h5>
                  <p>${contact.phone}</p>
              </div>                          
          </div>
          <div class="item">
              <i class="ti-email"></i>
              <div class="mb-0">
                  <h5>Email Address</h5>
                  <p>${contact.email}</p>
              </div>
          </div>
      </div>
           
           `;
        })
        .join("")}
                        
  </div>
</div>  
<div id="map">
  <iframe src="https://snazzymaps.com/embed/61257"></iframe>
</div>      
  
  
  
  </div>`;
};

export default Contact;
