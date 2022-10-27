import React,{useEffect,useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/services.css"
import Image from '../Images/club1.jpg'
import Image2 from '../Images/prod1.jpeg'
import Image3 from '../Images/posts.jpeg'

function Services (){
    const history = useHistory();
    return(
        <React.Fragment>
          
      <div>
        <h1><center><b>Services</b></center></h1>
        <br></br>
        <div className="row">
          <div className="column">
          <div className="row5">
            <h4><center>Explore Products</center></h4>
            <a href="Buyproducts">
              <img src={Image2} width={150} height={300} /></a>
            <p>We provide a lot of varity products for students such as books, laptops, headsets, mobiles and some stationary items which helps the students to buy and use for their studies </p>
          </div>
          </div>
          <div className="column">
          <div className="row5">
            <h4><center>Explore Clubs</center></h4>
            <br></br>
            <a href="Manageclubs">
              <img src={Image}  width={150} height={300} /></a>
            <p>We provide clubs for the students they can explore the clubs and explore more about them and the students can join the clubs or leave the clubs based on their own intrests.</p>
          </div>
          </div>
          <div className="column">
          <div className="row5">
            <h4><center>Explore Posts</center></h4>
            <img src={Image3} width={150} height={300} />
            <a href="Manageposts"></a>
            <p>We provide posts for the students they can explore the posts which were already added and they can add the pots and delete the posts if they wish to do.</p>
          </div>
          </div>
        </div>
        </div>
        
     </React.Fragment>
    )
}
export default Services