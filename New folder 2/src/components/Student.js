import React from 'react'
import '../CSS/student.css'
import { Link } from 'react-router-dom'


export default function Student() {
  return (
    <div className="row">
      <div className="leftcolumn">
          <div className="card">
            <h2>User Profile</h2>
            <p>User Information....</p>
          </div>  
          <div class="card">
            <div class="student_functions">       
              <Link to="/Manageproducts">
              <li ><span>Manage products</span></li></Link>
              <Link to="/Buyproducts">
              <li ><span>Explore Products</span></li></Link>
              <Link to="/Managecart">
              <li ><span>View Cart</span></li></Link>     
            </div>
          </div>  
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>My Posts</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Post1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Post2</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Post3</div>
                </div>
            </div>
            <Link to="/Manageposts">
              <li ><span>Manage Posts</span></li></Link>
          </div>
          <div className="card">
            <h2>My Clubs</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Club1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Club2</div>
                    <div className="fakeimg" style={{height:200 , width:300}}>Club3</div>
                </div>
            </div>
            <Link to="/Manageclubs">
              <li ><span>Manage Clubs</span></li></Link>
            
          </div>
        </div>
        
    </div>
  )
}
