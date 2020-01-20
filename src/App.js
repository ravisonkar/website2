import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbars from './Navbars';
import Aboutus from './Aboutus';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Link from './Link'
import  Home from './Home';
import Contactus from './Contactus';
import Login from './Login'




function App() {
  return (
    <BrowserRouter>
  <div>
<Navbars/>
<Switch>
<Route path="/Aboutus" component={Aboutus}/>
<Route path="/Link" component={Link}/>
<Route path="/Home" component={Home}/>
 <Route path="/Contactus" component={Contactus}/>
 <Route path="/Login" component={Login}/>
</Switch>
</div>
</BrowserRouter>
  );
}


export default App;
