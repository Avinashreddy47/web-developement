import React,{useEffect,useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/about.css"
// import Image from '../Images/hh.jpeg'
// import Image2 from '../Images/school.jpg'
// import Image3 from '../Images/flight.jpg'

function Services (){
    const history = useHistory();
    return(
        <React.Fragment>
        <div className="home-bgcolors">
            <br></br>
            <div>
        <div className="container">
    <div className="row">
        <div className="col-md-6">
            <h3>Siremar</h3>
        </div>
    </div>
            <div className="row">
                <div className="col-md-12">
                    <br></br>  <br></br>  <br></br>
                    <h2 style={{textAlign:"center"}}>Our Services</h2>
                </div>
            </div>
            </div> 
     </div>
     </div>

     <br></br>
     <div className="container">
     <div className="row">
         <div className="col-md-4"> 
         <div class="card"  style={{width:"18rem"}}>
  <img class="card-img-top"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Create your resident account</h5> 
    <p class="card-text">Register as Resident and get benefits in Hotels,discounts in Hotels and admission in schools</p>
  </div>
</div>
         </div>
         <div className="col-md-4">
         <div class="card"  style={{width:"18rem"}}>
  <img class="card-img-top" src={Image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Get discounts for various things like shops and travel</h5>
    <p class="card-text">Get Discounted Prices in Hotels you visit anf flights you travel,Get Benefited as a Margarita Resident</p>
  </div>
</div>
         </div>
         <div className="col-md-4">
         <div class="card"  style={{width:"18rem"}}>
  <img class="card-img-top"  alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Get info about school admission and more...</h5>
    <p class="card-text">Get Early admissions in schools and get discounted Prices in flight tickets as a Margarita Resident</p>
  </div>
</div>
         </div>
     </div>
 
     <br></br>
     </div>
     <br></br>
     </React.Fragment>
    )
}
export default Services