import React from 'react'
import { Link } from 'react-router-dom'
import  '../CSS/businessowner.css'

export default function Businessowner() {
  return (
    <div className="row">
      <div className="leftcolumn">
          <div className="card">
            <h2>Business Owner Profile</h2>
            <p>Business Information....</p>
          </div>
          
  <br />
  <br />
  <div className="card">
    <div className="bowner_functions">
      <p>
        <Link to ="/chat">
        <li ><span>Chat Option</span>
          </li>
        </Link>
      </p>
    </div>
  </div>

        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>My Products</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Product1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Product2</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Product3</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Product4</div>
                </div>
            </div><br/>
            <Link to ="/Manageproducts">
        <li ><span>Manage Products</span>
          </li>
        </Link>
           
          </div>
          <div className="card">
            <h2>My Advertisements</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Advertisement1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Advertisement2</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Advertisement3</div>
                </div>
            </div><br/>
            <Link to ="/Manageadv">
        <li ><span>Manage Advertisements</span>
          </li>
        </Link>
          </div>
        </div>
        
    </div>
  )
}
