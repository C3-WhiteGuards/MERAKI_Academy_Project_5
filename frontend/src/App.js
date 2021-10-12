import React from 'react';
import { Route } from 'react-router-dom';
import { Gym } from './components/Gym/Gym';
import { AddProducts } from './components/products/product';

const App = () => {
	return <div className="App">App component
	<AddProducts/>
	<Gym/>
	</div>;

};

export default App;
