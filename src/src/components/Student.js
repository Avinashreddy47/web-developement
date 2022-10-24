import React from 'react'
import '../CSS/student.css'
export default function Student() {
  return (
    <div className="row">
      <div className="leftcolumn">
          <div className="card">
            <h2>User Profile</h2>
            <p>User Information....</p>
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
            <p><a href="Manageposts">Manage Posts</a></p>
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
            <p><a href="Manageclubs">Manage Clubs</a></p>
          </div>
        </div>
        
    </div>
  )
}
