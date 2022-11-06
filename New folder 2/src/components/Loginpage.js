import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/login.css"
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import axios from "axios";
function Loginpage (){
  const history = useHistory();

    const [data,Setdata]=useState({
        email:"",
        password:"",
       
    });
    const eventhandler=(e)=>{
        Setdata({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const submit=()=>{
        $.get()
       // console.log(data.category);
        if (data.email !== '' && data.password !== '') {

             const api_path='http://localhost/Server/login.php';
        axios({
          method: 'post',
          url: api_path,
          headers: {
              'content-type': 'application/json'
          },
          data:data
      })
      .then(result => {  
        console.log(result.data);
        console.log(result.data.category);
        if(result.data.InvalidUser===1)
        {
            toast.error('Please enter valid email and password',{autoClose:2000})   
        }
        else
        {
          // console.log(data.email,data.password)
          localStorage.setItem("jwt", data.email);
          if (result.data.category === 'superadmin')
          {
              
              history.push('/superadmin')
          }
          else if (result.data.category === 'student')
          {
              
              history.push('/student')
          }
          else if (result.data.category === 'businessowner')
          {
              
              history.push('/businessowner')
          }
          else if (result.data.category === 'schooladmin')
          {
              
              history.push('/schooladmin')
          }
         
        }
      })
      .catch(           
      )
      ;
        }
         else {
            toast.error('Please enter valid email and password',{autoClose:2000})
        }
      }
      const [data1, Setdata1] = useState({
        name: "",
        cpassword: "",
        address: "",
        email: "",
        password: "",
        category: ""
    })
  
      const eventhandler1 = (e) => {
          Setdata1({
              ...data1,
              [e.target.name]: e.target.value
          })
      }
  
      const submit1 = () => {
          console.log(data1);
          if (data1.name == '' || data1.cpassword == '' || data1.address == '' || data1.email == '' || data1.password == '') {
              toast.error('Please enter all fields', { autoClose: 2000 })
          }
          else {
  
              if (data1.email != '' && data1.password != '') {
                  if (data1.email.indexOf('@') != -1) {
                      if (data1.cpassword === data1.password) {
                          if (data1.password.length >= 8) {
  
                              const api_path = 'http://localhost/Server/register.php';
                              axios({
                                  method: 'post',
                                  url: api_path,
                                  headers: {
                                      'content-type': 'application/json'
                                  },
                                  data: data1,
                              })
                                  .then(result => {
                                    console.log(data);
                                      if (result.data.Isvalid === 1) {
                                          toast.error('User already exists',{autoClose: 2000});
                                      }
                                      else if(result.data.Registered === 1) {
                                          toast.success('User Registered Successfully', { autoClose: 2000 })
                                      }
                                  })
                                  .catch(
                                  );
                          }
                          else {
                              toast.error('Password should be atleast 8 characters', { autoClose: 2000 })
                          }
                      }
                      else {
                          toast.error('Passwords doesnot match',{autoClose: 2000});
                      }
                  }
                  else {
                      toast.error('Please enter valid email', { autoClose: 2000 })
                  }
              }
              else {
                  toast.error('Please enter valid email and password', { autoClose: 2000 })
              }
          }
  
  
      }
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
                  <input type="email" 
                         value={data.email}
                        name="email"
                        onChange={eventhandler} 
                        placeholder="Email address" 
                        className="form-control" />
                </div>
                <Toaster/>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input type="password" value={data.password} name="password" 
                    onChange={eventhandler}  placeholder="Password" 
                    className="form-control" />
                </div>
                <button  type="button" onClick={submit} className="btn btn-outline-dark btn-block rounded-pill">Login</button>
              </form>
              <h6 className="mt-3">Don't have an account? <a href="#"> Create Account Here</a></h6>
              <div className="container" style={{backgroundColor: '#f1f1f1'}}>
              <Link to="/forgotpassword">
                <li ><span className="psw">Did you Forgot Password?</span></li></Link>
                </div>
                <br /><br />
                
            </div>
          </div>
          <div className="col-md-6 mb-5">
            {/* Registration*/}
            <div className="card shadow p-5 animated zoomIn slow">
              <h3 className="text-center font-weight-bold text-uppercase mb-3">SIGN UP</h3>
              <form>
                <div className="form-group">
                  <label>Enter Username</label>
                  <input type="text" value={data1.name} name="name" 
                        onChange={eventhandler1}  
                        placeholder="Enter your Name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" value={data1.email} name="email" 
                        onChange={eventhandler1}  
                        placeholder="Enter your Name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input type="password" 
                        value={data1.password} name="password" 
                        onChange={eventhandler1} class="form-control" placeholder="Password"  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" value={data1.cpassword} 
                        name="cpassword" onChange={eventhandler1} class="form-control" 
                        placeholder="Password" className="form-control" />
                </div>
                <div className="form-group">
                <label htmlFor="add"><b>Address</b></label>
                  <input  type="text" value={data1.address}
                         name="address" onChange={eventhandler1}
                        class="form-control" placeholder="Enter your Address" />
                </div>
             
                  <label htmlFor="role"><b>Select Role:</b></label>
               <div>
                  <select value={data1.category} name="category" onChange={eventhandler1} id="role">
                    <option value="student">Student</option>
                    <option value="schooladmin">School Admin</option>
                    <option value="businessowner">Business Owner</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                  </div>
                <button type="button" onClick={submit1} className="btn btn-outline-dark btn-block rounded-pill">Register</button>
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
