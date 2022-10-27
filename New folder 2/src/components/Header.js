import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Loginpage from "../components/Loginpage";
import Homepage from "../components/Homepage"
import Aboutpage from "../components/Aboutpage"
import Contactus from "../components/Contactus"
import Services from "../components/Services"
import Superadmin from "../components/Superadmin"
import SuperAdminStudents from "../components/SuperAdminStudents"
import SuperAdminChats from "../components/SuperAdminChats"
import SuperAdminBusiness from "../components/SuperAdminBusiness"
import Buyproducts from "../components/Buyproducts"
import Businessowner from "../components/Businessowner"
import Chat from "../components/Chat"
import Forgotpassword from '../components/Forgotpassword'
import Bowner from "../components/Bowner"
import Manageadv from "../components/Manageadv"
import Managecart from "../components/Managecart"
import Manageposts from "../components/Manageposts"
import Manageproducts from "../components/Manageproducts"
import Manageclubs from "../components/Manageclubs"
import Adminschool from "../components/Adminschool"
import Reports from "../components/Reports"

import Student from "../components/Student"
import Schooladmin from "../components/Schooladmin"
import Studentlist from "../components/Studentlist"
import '../CSS/header.css'
function Header()
{
  const token=window.localStorage.getItem('flag');
return(
<Router>
      <nav>
      <div className="navbar">
      <div class="navbar-logo">
        <a>  <Link to="/">Mercado Escolar</Link></a>
        </div>
        <div class="navbar-right">
         <a> <Link to="/homepage">Home</Link></a>
    
         <a>   <Link to="/aboutpage">About</Link></a>

         <a><a href="http://axs4491.uta.cloud/blog/" target="_blank" rel="noreferrer">Blog</a></a>
        
          <a>  <Link to="/servicepage">Services</Link></a>
        
          <a>  <Link to="/contactus">Contact</Link></a>
          
          <a> <Link to="/loginpage">Login/Register</Link></a>

          <label htmlFor="role"><b></b></label>
               <div>
                  <select name="role" id="role">
                    <option value="student"> <a> <Link to="/Student">Students</Link></a></option>
                    <option value="schooladmin">    <a> <Link to="/Schooladmin">Schooladmin</Link></a></option>
                    <option value="businessowner"><a> <Link to="/Businessowner">Businessowner</Link></a></option>
                    <option value="superadmin"><a> <Link to="/Superadmin">Superadmin</Link></a></option>
                  </select>
                  </div>
         
          

      

          

         
        </div>     
        </div>
        </nav>
      
      <Switch>
           <Route path="/" exact>
            <Homepage/>
          </Route>

          <Route path="/homepage" exact>
            <Homepage />
          </Route>

          <Route path="/Aboutpage" exact>
            <Aboutpage />
          </Route>

          <Route path="/loginpage" exact>
            <Loginpage />
          </Route>

          <Route path="/contactus" exact>
            <Contactus />
          </Route>

          <Route path="/servicepage" exact>
            <Services />
          </Route> 
          <Route path="/businessowner" exact>
            <Businessowner />
          </Route> 
          
          <Route path="/aboutpage" exact>
            <Aboutpage />
          </Route>

          <Route path="/superadminbuisness" exact>
            <SuperAdminBusiness />
          </Route> 
          <Route path="/adminschool" exact>
            <Adminschool />
          </Route>
          <Route path="/superadminchats" exact>
            <SuperAdminChats />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/superadminstudents" exact>
            <SuperAdminStudents />
          </Route>
          <Route path="/superadmin" exact>
            <Superadmin />
          </Route>
          <Route path="/Reports" exact>
            <Reports />
          </Route>
          
          <Route path="/schooladmin" exact>
            <Schooladmin />
          </Route>
          <Route path="/adminschool" exact>
            <Adminschool />
          </Route>
          
          <Route path="/buyproducts" exact>
            <Buyproducts />
            </Route>
          <Route path="/bowner" exact>
            <Bowner />
          </Route> 
          <Route path="/student" exact>
            <Student />
          </Route> 
          <Route path="/manageadv" exact>
            <Manageadv />
          </Route>
          
          <Route path="/forgotpassword" exact>
            <Forgotpassword />
          </Route>
          <Route path="/managecart" exact>
            <Managecart />
          </Route> 
          <Route path="/manageposts" exact>
            <Manageposts />
          </Route> 
          <Route path="/manageclubs" exact>
            <Manageclubs />
          </Route> 
          <Route path="/manageproducts" exact>
            <Manageproducts />
          </Route>
          
          <Route path="/studentlist" exact>
            <Studentlist />
          </Route> 
 
        </Switch>
      </Router>
)
}
export default Header
