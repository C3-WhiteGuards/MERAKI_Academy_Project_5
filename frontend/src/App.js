import React from "react";
import { Route,Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";
import Navigaion from "./components/navigation/index"
import Register from "./components/auth/signUp";
const App = () => {
  return (
    <div>


<Navigaion/> 

      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />




        {/* rashed */}





        {/* roqia */}





        {/* koulthom */}




        {/* abdalllah */}



        
      </Switch>
    </div>
  );
};

export default App;
