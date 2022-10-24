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
            <a href="exploreproducts">
              <img src={Image2} width={150} height={300} /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
          </div>
          </div>
          <div className="column">
          <div className="row5">
            <h4><center>Explore Clubs</center></h4>
            <br></br>
            <a href="exploreclubs">
              <img src={Image}  width={150} height={300} /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
          </div>
          </div>
          <div className="column">
          <div className="row5">
            <h4><center>Explore Posts</center></h4>
            <img src={Image3} width={150} height={300} />
            <a href="exploreposts"></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
          </div>
          </div>
        </div>
        </div>
        
     </React.Fragment>
    )
}
export default Services