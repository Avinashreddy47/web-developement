import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/superadmin.css"
 
export default function Superadmin() {
  return (
    <div className="row">
      <div className="leftcolumn">
    <div className="card">
      <h2>Super Admin Dashboard</h2>
      <br />
      <ul>
        <Link to="/SuperAdminBusiness">
        <li ><span>Manage Business</span></li></Link>
        <Link to="/SuperAdminStudents">
        <li ><span>Manage Students</span></li></Link>
    
        <Link to="/SuperAdminSchools">
        <li ><span>Manage Schools</span></li></Link>
    
        <Link to="/SuperAdminChats">
        <li ><span>Manage chat</span></li></Link>
    
      </ul>
      <br />
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>
        <center>Reports will be displayed here.............</center>
      </h2>
      <div className="image-row">
        <div className="column">
          <div
            className="fakeimg"
            style={{ height: 200, width: 930, textAlign: "center" }}
          >
            Chart
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
