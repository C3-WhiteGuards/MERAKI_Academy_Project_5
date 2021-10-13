import React from "react";
import { Route,Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";
import Navigation from "./components/navigation/index"
const App = () => {
  return (
    <div>


<Navigation/> 

      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />




        {/* rashed */}





        {/* roqia */}





        {/* koulthom */}




        {/* abdalllah */}



        
      </Switch>
    </div>
  );
};

export default App;
