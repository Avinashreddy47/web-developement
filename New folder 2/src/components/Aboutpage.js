
import React from "react";
// import { useHistory } from 'react-router-dom';
import "../CSS/about.css"
import Image from '../Images/Aboust-us.jpg'
// import Image from '../Images/photo.jpg'

function Aboutpage (){
    // const history = useHistory();
    return(
        <React.Fragment>
    <div>
      <nav>
   
      <div id="bar-bar">
        <section class="block-text">
          
          <div class="block-text-summary" >
            <h2>About Mercado Escolar </h2>    
          <div class="block-text-info">
          <img src={Image}/> 
          <div class="block-text-summary1">
          </div>

              <div  >
              <div className="block-text-summary5">
                    <p>Mercado Escolar is a website which provides better shopping experience to the students and this is a student oriented shopping website  </p>
                    <p>We provide a lot of differnet products such as laptops,books,Tablets and student related stationary items which will support there studies</p>
                    <p>Inaddition There are many application for students from this webiste which allows them to join clubs and post advertisemensts</p>
                </div>  
              </div>
            </div>

          </div>
        </section>
        </div>
        </nav>
      </div>
     </React.Fragment>
    )
}
export default Aboutpage