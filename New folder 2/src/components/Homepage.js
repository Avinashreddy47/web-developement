import React,{useEffect,useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/home.css"
import Image from '../Images/homepage.jpg'

function Homepage (){
    const history = useHistory();
    return(
        <React.Fragment>
       
    <div class="imgbox">
    <img  src={Image} alt="Image" />
        <div class="hero-text"> 
        <h1 style={{fontSize: '20px'}}>Mercado Escolar</h1>
            <h3>Facilitate buying and selling in one click with Mercado Escolar</h3>
        </div>
    </div>
 
    </React.Fragment>
    )
}
export default Homepage