import { Login } from "../auth/login";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.css"

const Navigation = () => {

  const state = useSelector((state) => {
    return {
      token : state.token.token,
    };
  });

  return (
    <nav className="fixed">
         <div className="left">
        <img src="/image.png"/>
        </div>
      {!state.token ? (
<ul className="nav-list">
          <div className="words">
        <li className="nav-item">
            <Link className="Link" to="/login">
              login
            </Link>
            </li>
          <li className="nav-item">
          <Link className="Link" to="/signup">
          signup
            </Link> 
          </li>
          </div>
</ul>
      
      ) : (
        
<ul className="nav-list">
   <div className="words">

           <li className="nav-item">
            <Link className="Link" to="/logout">
              logOut
            </Link>
            </li>
          <li className="nav-item">
            <Link className="Link" to="/home">
              Home
            </Link>
          </li>
        <li className="nav-item">
            <Link className="Link" to="/profile">
              profile
            </Link>
          </li> 
    <li className="nav-item">
            Profile 
          </li>
         </div>
</ul>
      )}
    </nav>
  );
};


export default Navigation;
