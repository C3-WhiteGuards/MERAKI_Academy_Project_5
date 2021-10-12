import { Login } from "../auth/login";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
	  
    <nav className="fixed">
      {/* {!token.token ? ( */}
      <div className="image">
        <img src="https://files.slack.com/files-pri/T0270UF1MS6-F02HLR0TWSY/fb_img_1633732003428.png" />
      </div>

      <div  className="words"> 
        <ul className="nav-list">
          <li className="nav-item">
            <Login />
          </li>
          <li className="nav-item">
            <Register />
          </li>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>

          {/* <ul className="nav-list">
        <li className="nav-item">
          <h3 className="YOR FITNESS FIRST ">YOUR FITNESS FIRST</h3>
        </li> */}

          {/* ) : ( */}
          {/* <li className="nav-item">
            <Link className="Link" to="/profile">
              profile
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="Link" to="/logOut">
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
