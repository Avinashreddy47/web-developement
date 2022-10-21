import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/login.css"
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import axios from "axios"
function Loginpage (){
    const history = useHistory();

    const [data,Setdata]=useState({
        email:"",
        password:"",
        category:"admin",
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

            //  const api_path='';
        axios({
          method: 'post',
        //   url: api_path,
          headers: {
              'content-type': 'application/json'
          },
          data:data
      })
      .then(result => {  
        console.log(result.data);
        // if(result.data.InvalidUser===1)
        // {
        //     toast.error('Please enter valid email and password',{autoClose:2000})   
        // }
        // else
        // {
          // console.log(data.email,data.password)
          localStorage.setItem("jwt", data.email);
          if (data.category === 'businessowner')
          {
              
              history.push('/businessowner')
          }
          else if(data.category === 'student')
          {
              history.push('/student')
          }
          else if(data.category === 'super admin')
          {
              history.push('/superadmin')
          }
          else if(data.category === 'schooladmin')
          {
              history.push('/superadmin')
          }
        // }
      })
      .catch(           
      );
        }
         else {
            toast.error('Please enter valid email and password',{autoClose:2000})
        }
    }

    return(
        <React.Fragment>
  
    <div className="leftcolumn">
     <br></br>
     <div className="container" style={{width:'440px',marginTop:'140px',backgroundColor:'lavender'}}>
            <br></br>
            <div class="mb-3">
            <h3>Login</h3>
            </div>
        <div class="mb-3">
  <label for="uname" class="form-label">Email address<span style={{color:'red'}}>*</span></label>
  <input type="email" value={data.email} name="email" onChange={eventhandler} class="form-control"  placeholder="Email address"/>
</div>
<div class="pswrd">
<label for="exampleFormControlInput1" class="form-label">Password</label><span style={{color:'red'}}>*</span>
  <input type="password" value={data.password} name="password" onChange={eventhandler} class="form-control" placeholder="Password"/>
</div>

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Category</label><span style={{color:'red'}}>*</span>
  <select value={data.category} name="category" onChange={eventhandler} class="form-control" placeholder="Category">
    <option value="superadmin">SuperAdmin</option>
    <option value="student">Student</option>
    <option value="schooladmin">School Admin</option>
    <option value="businessowner">Business owner</option>
</select>
</div>
<br></br>
<div class="mb-3">
<button type="button" onClick={submit} style={{ float: 'right', backgroundColor: '#00208A' }} class="btn btn-primary">Login</button>
</div>
<div class="mb-3">
</div>
<br></br><br></br><br></br>
</div>
</div>
     <br></br>
     <div className="leftcolumn1">
                <br></br>
                <div>
                    <div className="container">
                        
                            <div className="col-md-6">
                                <h3>Mercado Escolar</h3>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className="container" style={{ width: '440px', marginTop: '60px', backgroundColor: 'lavender' }}>
                    <br></br>
                    <div class="mb-3">
                        <h3>Signup</h3>
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" value={data.name} name="name" onChange={eventhandler} class="form-control" placeholder="Enter your Name" />
                    </div>
                    <div class="uname">
                        <label for="exampleFormControlInput1" class="form-label">Address</label><span style={{ color: 'red' }}>*</span>
                        <input type="text" value={data.address} name="address" onChange={eventhandler} class="form-control" placeholder="Enter your Address" />
                    </div>
                    <div class="uname">
                        <label for="exampleFormControlInput1" class="form-label">Email</label><span style={{ color: 'red' }}>*</span>
                        <input type="text" value={data.email} name="email" onChange={eventhandler} class="form-control" placeholder="Enter your Email Id" />
                    </div>
                    <div class="pswrd">
                        <label for="exampleFormControlInput1" class="form-label">Password</label><span style={{ color: 'red' }}>*</span>
                        <input type="password" value={data.password} name="password" onChange={eventhandler} class="form-control" placeholder="Password" />
                    </div>
                    <div class="add">
                        <label for="exampleFormControlInput1" class="form-label">Confirm Password</label><span style={{ color: 'red' }}>*</span>
                        <input type="password" value={data.cpassword} name="cpassword" onChange={eventhandler} class="form-control" placeholder="Password" />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        <button type="button" onClick={submit} style={{ float: 'right', backgroundColor: '#00208A' }} class="btn btn-primary">Sign up</button>
                    </div>
              
                    <br></br><br></br><br></br>
                </div>
            </div>
            <br></br>
     </React.Fragment>
    )
}
export default Loginpage