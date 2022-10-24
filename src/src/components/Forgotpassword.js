import React from "react";
import "../CSS/about.css"
// import Image from '../Images/photo.jpg'
import 'react-toastify/dist/ReactToastify.css';
function Forgotpassword() {
    return(
        <React.Fragment>
           
    <div>

         <div id="bar-bar">
         <div class="row">
        <div class="leftcolumn">
            <h2>Forgot Password</h2>
            <form action="/action_page.php" method="post">
            <div class="container">
                <label for="uname"><b>Enter your registered email id:</b></label>
                <input type="text" placeholder="Enter Email" name="uname" required/>
                <button type="submit">Reset Password</button>
            </div>
        </form>  
        </div>
    </div>
    </div>
      </div>
      
      </React.Fragment>
    )
}
    export default Forgotpassword