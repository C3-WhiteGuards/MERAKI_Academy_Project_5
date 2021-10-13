import React from "react";
import { Route,Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";
import Register from "./components/auth/signUp";
import Navigation from "./components/navigation/index"
import {Footer}  from "./components/Footer/index"
import { Logout } from "./components/logout/Logout";
import About from "./components/Footer/About";
import Policy from "./components/Footer/Policy";

const App = () => {
  return (
    <div>


<Navigation/> 

      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path = '/logout' component = {Logout} />




        {/* rashed */}





        {/* roqia */}
<Route  path = '/boutUs' component = {About} />
<Route  path = '/ourPolicy' component = {Policy} />



        {/* koulthom */}




        {/* abdalllah */}



        
      </Switch>
<Footer/>
    </div>
  );
};

export default App;
