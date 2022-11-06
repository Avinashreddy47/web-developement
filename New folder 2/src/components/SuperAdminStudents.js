import React from 'react'
import "../CSS/studentlist.css"


const SuperAdminBusiness = () => {
    return (
        <div className="row">
            <div className="leftcolumn">
    <div className="card">
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Add New Student"
        />
        <button >Add</button>
      </h3>
      <h3>
        <input
          type="text"
          id="myInput"
          onkeyup="myFunction()"
          placeholder="Remove a Student"
        />
        <button className="button btn1">Delete</button>
      </h3>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2>Student List</h2>
      <input
        type="text"
        id="myInput"
        onkeyup="myFunction()"
        placeholder="Search for names.."
      />
      <ul id="myUL">
        <li>
          <a href="#">Student Name</a>
        </li>
        <li>
          <a href="#">Andy Cal</a>
        </li>
        <li>
          <a href="#">Brandon Smith</a>
        </li>
        <li>
          <a href="#">Carly J</a>
        </li>
        <li>
          <a href="#">Derek Smith</a>
        </li>
        <li>
          <a href="#">Harry P</a>
        </li>
        <li>
          <a href="#">Laura Sanders</a>
        </li>
        <li>
          <a href="#">Manoj Singh</a>
        </li>
        <li>
          <a href="#">Nell Carter</a>
        </li>
        <li>
          <a href="#">Padma Narayan</a>
        </li>
        <li>
          <a href="#">Rishi Malhotra</a>
        </li>
      </ul>
    </div>
  </div>
  
</div>
    )
}

export default SuperAdminBusiness
// react-scripts --expose-gc --max_old_space_size=12000 start