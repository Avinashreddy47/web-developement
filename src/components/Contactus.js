import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "../CSS/contact.css"
// import Image from '../Images/photo.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Aboutpage() {
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
            toast.error('Please enter all fields', { autoClose: 2000 })
        }
        else {
            if (data.phone.length === 10) {
                if (data.email.indexOf('@') !== -1) {
                    // const api_path = '';
                    axios({
                        method: 'post',
                        // url: api_path,
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

        return (
            <React.Fragment>
               <div>
      <nav>
      <div id="bar-bar">
        <section class="block-text">
          <div class="block-text-summary">
            <p class="">Contact us</p>   
            <div id="Services">           
                <form id="" class="" method="post">
                    
                    <div class="services-group">
                        <label for="Name" class="services-label" >Your name</label>
                            <input type="text" id="Name" name="Name" class="Services-control" required></input>
                            <label for="Name" class="services-label">Last name</label>
                            <input type="text" id="Name" name="Name" class="Services-control" required></input>
                        </div>
            
                    <div class="services-group">
                        <label for="Email" class="services-label" >Your email address</label>
                        <div class="services-group">
                            <input type="email" id="Email" name="Email" class="Services-control" required></input>
                        </div>
                        </div>
            
                    <div class="services-group">
                        <label for="Message" class="services-label" >Your message</label>
                        <div class="services-group">
                            <textarea id="Message" name="Message" class="Services-control" rows="12" maxlength="3000" required></textarea>
                        </div>
                        </div>
                   
            
                    <div class="services-group">
                        <button type="submit"  class="services-button">Send Message</button>
                    </div>
                </form>
                </div>
            
          </div>
        </section>
      </div>
      </nav>
      </div>
        </React.Fragment>
        )
    }
    export default Aboutpage