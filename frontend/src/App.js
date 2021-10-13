import React from "react";
import { Route } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";
import { Switch } from "react-router";
import { GymsView } from "./components/Sections/sections";
import { AddTrainer, OneTrainer, Trainer } from "./components/trainer/trainer";
import { Resturants } from "./components/resturants/resturant";
const App = () => {
  return (
    <div>
		
      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />




        {/* rashed */}
        <Route path='/gymsview' component={GymsView} />
		<Route path='/ALLGyms' component={Gym}/>
		<Route path='/AllTrainers' component={Trainer}/>
		<Route path='/AllRestaurnats' component={Resturants}/>
		<Route exact path='/trainer/:id' component={OneTrainer}/>

        {/* roqia */}





        {/* koulthom */}




        {/* abdalllah */}



        
      </Switch>
    </div>
  );
};

export default App;
