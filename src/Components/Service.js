import "../../public/style/Service.css";
const Service = () => {
  return `
    <div class="service__container" id="service">
        <div class="service">
        <div class="description">
        <h6 class="subtitle">Service</h6>
        <h6 class="title">What I Do</h6>
        <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br> rerum commodi corrupti, temporibus non quam.</p>
        </div>

        <div class="flex">
            <div class="flex-col">
                <div class=" card ">
                    <div class="card-body">
                        <i class="icon ti-crown"></i>
                        <h5>UI/UX Design</h5>
                    </div>
                </div>
            </div>
            <div class="flex-col">
                <div class=" card ">
                    <div class="card-body">
                        <i class="icon ti-desktop"></i>
                        <h5>Web Design</h5>
                    </div>
                </div>
            </div>
            
            
        
           </div>
        
        
        </div>
    
    
    
    </div>
  `;
};

export default Service;
