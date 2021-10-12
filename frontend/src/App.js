import React from "react";
import { Route,Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";

const App = () => {
  return (
    <div>
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
