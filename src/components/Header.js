import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Loginpage from "../components/Loginpage";
import Homepage from "../components/Homepage"
import Aboutpage from "../components/Aboutpage"
import Contactus from "../components/Contactus"
import Services from "../components/Services"
import Adminpage from "../components/Adminpage"

import '../CSS/header.css'
function Header()
{
  const token=window.localStorage.getItem('flag');
return(
<Router>
      <nav>
      <div className="col-md-6">
            <h3>Siremar</h3>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        <li>
            <link to="/homepage"></link>
        </li>
          <li>
            <Link to="/aboutpage">About</Link>
          </li>
          {/* <li>
          <a href="http://rxp6013.uta.cloud/" target="_blank" rel="noreferrer">Blog</a>
          </li> */}
          <li>
            <Link to="/servicepage">Services</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact</Link>
          </li>
          <li>
          <Link to="/loginpage">Login/Register</Link>
          </li>
        </ul>
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

          <Route path="/contactpage" exact>
            <Contactus />
          </Route>

          <Route path="/servicepage" exact>
            <Services />
          </Route> 

          <Route path="/aboutpage" exact>
            <Aboutpage />
          </Route>

          <Route path="/adminpage" exact>
            <Adminpage />
          </Route> 

        
        </Switch>
      </Router>
)
}
export default Header;
