import React from 'react'

export default function Login() {
  return (
    <div className="row">
        <div className="rightcolumn">
            <h2>Login Form</h2>
            <form action="/action_page.php" method="post">
            <div className="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
        
                <button type="submit">Login</button>
            </div>
        <div className="container">
            <span className="psw">Forgot <a href="forgotpassword.html">Password?</a></span>
        </div>
        <br/><br/><br/><br/><a href="student.html">Student View</a><br/>
        <br/><a href="businessowner.html">Business Owner View</a><br/>
        <br/><a href="schooladmin.html">School Admin View</a><br/>
        <br/><a href="superadmin.html">Super Admin View</a><br/>
        </form>
        </div>
        <div className="leftcolumn">
            <h2>Registration Form</h2>
            <form action="/action_page.php" method="post">
            <div className="container">
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required />

                <label for="uname"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="uname" required />

                <label for="mobnum"><b>Mobile Number</b></label>
                <input type="text" placeholder="Enter Mobile Number" name="mobnum" required />
                <br/><br/>
                <label for="dob"><b>Date Of Birth</b></label>
                <input type="date" placeholder="Enter DOB" name="dob" required /><br/><br/><br/>

                <label for="add"><b>Address</b></label>
                <input type="password" placeholder="Enter Address" name="add" required />
                
                <label for="pswrd"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pswrd" required /><br/><br/>

                <label for="role"><b>Select Role:</b></label>
                <select name="role" id="role">
                <option value="student">Student</option>
                <option value="schooladmin">School Admin</option>
                <option value="businessowner">Business Owner</option>
                </select>
                <br/><br/>
                <button type="submit">Register</button>
            </div>
        </form>  
        </div>
    </div>
  )
}
