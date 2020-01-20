import React from 'react';
import {Link} from 'react-router-dom'





const Navbars= ()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="Home">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="Link">Link</Link>
            </li>
            <li class="nav-item active">
            <Link class="nav-link" to="Aboutus" >Aboutus</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="Contactus">Contactus</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="Login">Login</Link>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" href="#" >Submit</a>
            </li>
          </ul>
        
        </div>
      </nav>


     )
    }
  export default Navbars
