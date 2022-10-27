import React from 'react'
import "../CSS/bowner.css"
function Bowner() {
  return (
    <div className="row">
      <div className="leftcolumn">
    <div className="card">
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Add New Business Owner"
        />
        <button className="">Add</button>
      </h3>
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Remove a Business Owner"
        />
        <button className="button btn1">Delete</button>
      </h3>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>Business Owners List</h2>
      <input
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="Search for names.."
      />
      <ul id="myUL">
        <li>
          <a href="#">Business Owner Name, Their Business</a>
        </li>
        <li>
          <a href="#">Anne Zelger, Office Stationary</a>
        </li>
        <li>
          <a href="#">Carl Jones, Astronomy Kits</a>
        </li>
        <li>
          <a href="#">Katherine F, TechSavy</a>
        </li>
        <li>
          <a href="#">Sarah Keith, SportEquipment</a>
        </li>
      </ul>
    </div>
  </div>
  
</div>

  )
}
 
export default Bowner