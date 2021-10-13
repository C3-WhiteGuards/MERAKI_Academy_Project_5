import { Login } from "../auth/login";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navigation = () => {

  const state = useSelector((state) => {
    return {
      token : state.token.token,
    };
  });

  return (
    <nav className="fixed">
      {!state.token ? (

      
        <ul className="nav-list">
          <li className="nav-item">
            <h3 className="your_fitness_first "> your fitness first </h3>
          </li>
          <li className="nav-item">
            <Link className="Link" to="/login">
              Login
            </Link>
            </li>
          {/* <li className="nav-item">
            <Login/>
          </li> */}
          <li className="nav-item">
           register 
          </li>
          {/* <li className="nav-item">
            <Link to="/home">Home</Link>
          </li> */}
     
        </ul>
      ) : (
        <ul className="nav-list">
          <li className="nav-item">
            <h3 className="your_fitness_first">your fitness first is good  </h3>
          </li>
           <li className="nav-item">
            <Link className="Link" to="/login">
              Login
            </Link>
            </li>
          {/* <li className="nav-item">
            <Login/>
          </li> */}
          {/* <li className="nav-item">
            <Link className="Link" to="/home">
              Home
            </Link>
          </li> */}
          
          {/* <li className="nav-item">
            <Link className="Link" to="/profile">
              profile
            </Link>
          </li> */}
          {/* <li className="nav-item">
            <Link className="Link odai" to="/cart">
              <MdAddShoppingCart size="2em" />{" "}
              <div className="n">{cart.number}</div>
            </Link>
          </li> */}
		 
{/* 		
          <li className="nav-item">
            <Link className="Link" to="/logOut">
              LogOut
            </Link>
          </li> */}
          <li className="nav-item">
            Profile 
          </li>
        </ul>
      )}
    </nav>
  );
};


export default Navigation;
