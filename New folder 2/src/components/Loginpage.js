import React from "react";
import "../CSS/login.css"
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
function Loginpage (){
    // const history = useHistory();
    return(
        <React.Fragment>
           <div className="container">
        <div className="row">
          
          <div className="col-md-6 mb-5">
            {/* Login*/}
            <div className="card shadow animated zoomIn slow p-5">
              <h3 className="text-center font-weight-bold text-uppercase mb-3">Login Here</h3>
              <form>
                <div className="form-group">
                  <label>Enter Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-outline-dark btn-block rounded-pill">Login</button>
              </form>
              <h6 className="mt-3">Don't have an account? <a href="#"> Create Account Here</a></h6>
              <div className="container" style={{backgroundColor: '#f1f1f1'}}>
              <Link to="/forgotpassword">
                <li ><span className="psw">Did you Forgot Password?</span></li></Link>
                </div>
                <br /><br />
                <Link to="/Student">
                <li ><span>Student View</span></li></Link>
                <Link to="/Businessowner">
                <li ><span>Business Owner View</span></li></Link>
    
                 <Link to="/Schooladmin">
                 <li ><span>School Admin View</span></li></Link>
    
                  <Link to="/Superadmin">
                  <li ><span>Super Admin View</span></li></Link>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            {/* Registration*/}
            <div className="card shadow p-5 animated zoomIn slow">
              <h3 className="text-center font-weight-bold text-uppercase mb-3">SIGN UP</h3>
              <form>
                <div className="form-group">
                  <label>Enter Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="add"><b>Address</b></label>
                  <input type="password" placeholder="Enter Address" name="add" required />
                </div>
             
                  <label htmlFor="role"><b>Select Role:</b></label>
               <div>
                  <select name="role" id="role">
                    <option value="student">Student</option>
                    <option value="schooladmin">School Admin</option>
                    <option value="businessowner">Business Owner</option>
                  </select>
                  </div>
                <button type="submit" className="btn btn-outline-dark btn-block rounded-pill">Register</button>
                <h6 className="mt-3">Don't have an account? <a href="#"> Create Account Here</a></h6>
              </form>
            </div>
          </div>
        </div>
      </div>
       </React.Fragment>
      );
    }
export default Loginpage
