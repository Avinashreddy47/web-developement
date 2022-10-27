import React from 'react'
import '../CSS/exploreposts.css'
export default function Adminschool() {
  return (
    <div className="row">
       <div className="leftcolumn">
    <div className="card">
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Add New School Admin"
        />
        <button className="">Add</button>
      </h3>
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Remove a School Admin"
        />
        <button className="button btn1">Delete</button>
      </h3>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>School Admin List</h2>
      <input
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="Search for names.."
      />
      <ul id="myUL">
        <li>
          <a href="#">School Admin Name, Their School</a>
        </li>
        <li>
          <a href="#">Anne Zelger, School A</a>
        </li>
        <li>
          <a href="#">Carl Jones, School B</a>
        </li>
        <li>
          <a href="#">Katherine F, School C</a>
        </li>
        <li>
          <a href="#">Sarah Keith, School D</a>
        </li>
      </ul>
    </div>
  </div>
 
</div>
  )
}
