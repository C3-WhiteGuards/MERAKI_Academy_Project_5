import React from "react";
import { Route, Switch } from "react-router-dom";
import { Gym } from "./components/Gym/Gym";
import { AddProducts, Allproduct } from "./components/products/product";
import { Login } from "./components/auth/login";

import { GymsView } from "./components/Sections/sections";
import { AddTrainer, Trainer } from "./components/trainer/trainer";
import { Resturants } from "./components/resturants/resturant";

import Register from "./components/auth/signUp";

import Navigation from "./components/navigation/index";
import { Footer } from "./components/Footer/index";

import { Logout } from "./components/logout/Logout";
import { Cart } from "./components/cart/cart";

import { OneTrainer } from "./components/trainer/OneTrainer";

import About from "./components/Footer/About"; 
import Policy from "./components/Footer/Policy";

import Payment from "./components/payment/payment";
import Main from "./components/main";
import { OneResturant } from "./components/resturants/OneReastaurant";

import { AddComment } from "./components/comment/comment";

import { ProfileUser } from "./components/users/profileUser";
import ScrollToTop from "./components/scroll/scroll";
import {Review} from "./components/Review/Review";
import Dashboard from "./components/dashboard/Dashboard";
import { Remainder } from "./components/remainder";

const App = () => {
 
  return (
    <div>

      
      <Navigation />
      <ScrollToTop/>

     
      <Switch>
        {/* islam */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/review" component={Review} />
        <Route path="/logout" component={Logout} />
        <Route path="/cart" component={Cart} />
        <Route path="/home" component={Main} />
        <Route path="/allproduct" component={Allproduct} />

        <Route path="/payment" component={Payment} />
        {/* rashed */}
        <Route path="/gymsview" component={GymsView} />
        <Route path="/ALLGyms" component={Gym} />
        <Route path="/AllTrainers" component={Trainer} />
        <Route path="/AllRestaurnats" component={Resturants} />
        <Route exact path="/trainer/:id" component={OneTrainer} />
        <Route exact path='/profile' component={ProfileUser}/>
        {/* roqia */}
        <Route path="/boutUs" component={About} />
        <Route path="/ourPolicy" component={Policy} />
        <Route exact path="/resturan/:id" component={OneResturant} />
        {/* <Route exact path="/feedback" component={AddComment} /> */}
        {/* koulthom */}
        
        {/* abdalllah */}
        <Route path="/" component={Main} />
      </Switch>
     
      <Footer />
      <Remainder/>
    </div>
  );
};

export default App;
