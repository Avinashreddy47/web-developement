import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/contact.css"
// import Image from '../Images/photo.jpg'
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';

import 'react-toastify/dist/ReactToastify.css';



import axios from "axios";function Contactus() {
  const history = useHistory();
  const [data, Setdata] = useState({
      name: "",
      lastname: "",
      phone: "",
      email: "",
      query: ""
  })

  const eventhandler = (e) => {
      Setdata({
          ...data,
          [e.target.name]: e.target.value
      })
  }
  const submit = () => {
      console.log(data);
      if (data.name == '' || data.lastname == '' || data.phone == '' || data.email == '' || data.query == '') {
        if (data.name == ''){
          toast.error('please enter a valid first name' , { autoClose: 2000 })
        }
        if(data.lastname == ''){
          toast.error('please enter a valid last name' , { autoClose: 2000 })
        }
        if(data.phone.length != 10){
          toast.error('please enter a valid phone number' , { autoClose: 2000 })
        }
        if(data.email.indexOf('@') == -1){
          toast.error('please enter a valid email' , { autoClose: 2000 })
        }
        if(data.query == ''){
          toast.error('please enter a valid description' , { autoClose: 2000 })
        }
      }
      else {
          if (data.phone.length === 10) {
              if (data.email.indexOf('@') !== -1) {
                  const api_path = 'http://localhost/Server/contactus.php';
                  axios({
                      method: 'post',
                      url: api_path,
                      headers: {
                          'content-type': 'application/json'
                      },
                      data: data
                  })
                  .then(result => {
                      toast.success('Queries has been mailed to Admin',{autoClose:2000})
                  })
                  .catch(
                  );
              }
              else {
                  toast.error('Please enter valid email',{autoClose:2000})
              }
          }
          else
          {
              toast.error('Please enter valid mobile number',{autoClose:2000})
          }
      }
  }
    return(
        <React.Fragment>
           <Toaster/>
    <div>
    <nav>
         <div id="bar-bar">

          <section className="block-text">
            <div className="block-text-summary">
              <h2>Contact us</h2>   
              <div id="Services">           
                <form id className method="post">
                  <div className="services-group">
                    <label htmlFor="Name" className="services-label">Your name</label>
                    <input type="text" 
                                    
                                    value={data.name} 
                                    name="name" 
                                    onChange={eventhandler} 
                                    placeholder="Firstname" 
                                    className="Services-control" required />
                    <label htmlFor="Name" className="services-label">Last name</label>
                    <input value={data.lastname} 
                                    name="lastname" 
                                    onChange={eventhandler} 
                                    placeholder="Lastname"
                                     className="Services-control" required />
                  </div>
                </form></div>
                <div className="services-group">
                <label htmlFor="Email" className="services-label" pattern="[0-9]*">Phone number</label>
                <div className="services-group">
                  <input type="text" value={data.phone} 
                                    name="phone" onChange={eventhandler} 
                                    placeholder="Phone"
                  className="Services-control" required />
                </div>
              </div>
              <div className="services-group">
                <label htmlFor="Email" className="services-label">Your email address</label>
                <div className="services-group">
                  <input type="text"
                                     value={data.email} 
                                     name="email" 
                                     onChange={eventhandler} 
                                     placeholder="Email"
                  className="Services-control" required />
                </div>
              </div>
              <div className="services-group">
                <label htmlFor="Message" className="services-label">Your message</label>
                <div className="services-group">
                  <textarea value={data.query} 
                                    name="query" 
                                    onChange={eventhandler} 
                                    placeholder="Query" className="Services-control" rows={12} maxLength={3000} required defaultValue={""} />
                </div>
              </div>
              <div className="services-group">
                <button type="submit" onClick={submit} className="services-button">Send Message</button>
              </div>
            </div>
          </section></div>
          </nav>
      </div>
      
      </React.Fragment>
    )
}
    export default Contactus