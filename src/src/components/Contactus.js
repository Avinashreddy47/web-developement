import React from "react";
import "../CSS/about.css"
// import Image from '../Images/photo.jpg'
import 'react-toastify/dist/ReactToastify.css';
function Contactus() {
    return(
        <React.Fragment>
           
    <div>
    <nav>
         <div id="bar-bar">
          <section className="block-text">
            <div className="block-text-summary">
              <p className>Contact us</p>   
              <div id="Services">           
                <form id className method="post">
                  <div className="services-group">
                    <label htmlFor="Name" className="services-label">Your name</label>
                    <input type="text" id="Name" name="Name" className="Services-control" required />
                    <label htmlFor="Name" className="services-label">Last name</label>
                    <input type="text" id="Name" name="Name" className="Services-control" required />
                  </div>
                </form></div>
              <div className="services-group">
                <label htmlFor="Email" className="services-label">Your email address</label>
                <div className="services-group">
                  <input type="email" id="Email" name="Email" className="Services-control" required />
                </div>
              </div>
              <div className="services-group">
                <label htmlFor="Message" className="services-label">Your message</label>
                <div className="services-group">
                  <textarea id="Message" name="Message" className="Services-control" rows={12} maxLength={3000} required defaultValue={""} />
                </div>
              </div>
              <div className="services-group">
                <button type="submit" className="services-button">Send Message</button>
              </div>
            </div>
          </section></div>
          </nav>
      </div>
      
      </React.Fragment>
    )
}
    export default Contactus