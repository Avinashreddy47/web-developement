import React from "react";
import "../CSS/login.css"
import 'react-toastify/dist/ReactToastify.css';

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
                  <span className="psw">Forgot <a href="forgotpassword">Password?</a></span>
                </div>
                <br /><br /><a href="Student">Student View</a><br />
                <br /><a href="Bowner">Business Owner View</a><br />
                <br /><a href="Superadmin">School Admin View</a><br />
                <br /><a href="Superadmin">Super Admin View</a><br />
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
               
                  <select name="role" id="role">
                    <option value="student">Student</option>
                    <option value="schooladmin">School Admin</option>
                    <option value="businessowner">Business Owner</option>
                  </select>
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
