import React from 'react';
import { Route } from 'react-router-dom';
import { Gym } from './components/Gym/Gym';
import { AddProducts } from './components/products/product';
import { Login } from './components/auth/login';

const App = () => {
	return (<div>
    <Switch>
    <Route path="/login" component={Login}/> 
    
   
    
  
    
    
    
    </Switch>
    
   
      </div>)

};

export default App;
