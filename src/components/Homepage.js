import React,{useEffect,useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/about.css"
// import Image from '../Images/photo.jpg'

function Homepage (){
    const history = useHistory();
    return(
        <React.Fragment>
      <div class="navbar">
       
        <div class="navbar-logo">
            <a >Mercado Escolar</a>
        </div>
    </div>
    <div class="hero-image">
        <div class="hero-text">
          <h1 >Mercado Escolar</h1>
          <h3>Facilitate buying and selling in one click with Mercado Escolar</h3>
        </div>
    </div>
    </React.Fragment>
    )
}
export default Homepage