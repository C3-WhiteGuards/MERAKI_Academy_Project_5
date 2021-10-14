import React from "react";
import { Route,Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";


import { GymsView } from "./components/Sections/sections";
import { AddTrainer,  Trainer } from "./components/trainer/trainer";
import { Resturants } from "./components/resturants/resturant";



import Register from "./components/auth/signUp";
import Navigation from "./components/navigation/index"
import {Footer}  from "./components/Footer/index"
import { Logout } from "./components/logout/Logout";
import { OneTrainer } from "./components/trainer/OneTrainer";
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
        <Route path='/gymsview' component={GymsView} />
		<Route path='/ALLGyms' component={Gym}/>
		<Route path='/AllTrainers' component={Trainer}/>
		<Route path='/AllRestaurnats' component={Resturants}/>
		<Route exact path='/trainer/:id' component={OneTrainer}/>

        {/* roqia */}




        {/* koulthom */}




        {/* abdalllah */}



        
      </Switch>
<Footer/>
    </div>
  );
};

export default App;
