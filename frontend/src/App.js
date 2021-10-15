import React from "react";
import { Route, Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts } from "./components/products/product";
import { Login } from "./components/auth/login";

import { GymsView } from "./components/Sections/sections";
import { AddTrainer, Trainer } from "./components/trainer/trainer";
import { Resturants } from "./components/resturants/resturant";

import Register from "./components/auth/signUp";

import Navigation from "./components/navigation/index";
import { Footer } from "./components/Footer/index";


import { Logout } from "./components/logout/Logout";
import {Cart} from "./components/cart/cart";

import { OneTrainer } from "./components/trainer/OneTrainer";

import About from "./components/Footer/About";
import Policy from "./components/Footer/Policy";

import Payment from "./components/payment/payment";


const App = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={Cart} />

        <Route path="/payment" component={Payment} />
        {/* rashed */}
        <Route path="/gymsview" component={GymsView} />
        <Route path="/ALLGyms" component={Gym} />
        <Route path="/AllTrainers" component={Trainer} />
        <Route path="/AllRestaurnats" component={Resturants} />
        <Route exact path="/trainer/:id" component={OneTrainer} />

        


        {/* roqia */}
        <Route path="/boutUs" component={About} />
        <Route path="/ourPolicy" component={Policy} />

        {/* koulthom */}

        {/* abdalllah */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
