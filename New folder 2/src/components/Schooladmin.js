import React from 'react'
import  '../CSS/schooladmin.css'
import { Link } from 'react-router-dom'

export default function Schooladmin() {
  return (
    <div className="row">
      <div className="leftcolumn">
          <div className="card">
            <h2>School Admin Profile</h2>
            <p>School Admin Information....</p>
          </div>
          <div classname='schooladmin_functions'>
          <div className="card">
          <Link to ="/studentlist">
        <li ><span>Manage Students</span>
          </li>
        </Link>
        <Link to ="/bowner">
        <li ><span>Manage Business Owner</span>
          </li>
        </Link>
        <Link to ="/reports">
        <li ><span>View Reports</span>
          </li>
        </Link>
          </div>
          </div>    
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>Student Posts</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Post1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Post2</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Post3</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Post4</div>
                </div>
            </div>
            <p>
            <Link to ="/manageposts">
        <li ><span>Manage Posts</span>
          </li>
        </Link></p>
          </div>
          <div className="card">
            <h2>Student Clubs</h2>
            <div className="image-row"> 
                <div className="column">
                    <div className="fakeimg" style={{height:200, width:300}}>Club1</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Club2</div>
                    <div className="fakeimg" style={{height:200, width:300}}>Club3</div>
                </div>
            </div>
            <p>
            <Link to ="/manageclubs">
        <li ><span>Manage Clubs</span>
          </li>
        </Link></p>
          </div>
        </div>
        
    </div>
  )
}
