import { Login } from "../auth/login";
import { useSelector } from 'react-redux';
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setToken } from "../../../redux/action/loginToken"
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
            <Login/>
          </li>
          {/* <li className="nav-item">
            <Register/>
          </li> */}
          {/* <li className="nav-item">
            <Link to="/home">Home</Link>
          </li> */}
     
        </ul>
      ) : (
        <ul className="nav-list">
          <li className="nav-item">
            <h3 className="your_fitness_first">your fitness first </h3>
          </li>
          {/* <li className="nav-item search">
            <Search />
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
            <Profile />
          </li>
        </ul>
      )}
    </nav>
  );
};
//   return (
	  
//     <nav className="fixed">
//       {!token.token ? (
//       <div className="image">
//         <img src="https://files.slack.com/files-pri/T0270UF1MS6-F02HLR0TWSY/fb_img_1633732003428.png" />
//       </div>

//       <div  className="words"> 
//         <ul className="nav-list">
//           <li className="nav-item">
//             <Login />
//           </li>
//           <li className="nav-item">
//             <Register />
//           </li>
//           <li className="nav-item">
//             <Link to="/home">Home</Link>
//           </li>

//           {/* <ul className="nav-list">
//         <li className="nav-item">
//           <h3 className="YOR FITNESS FIRST ">YOUR FITNESS FIRST</h3>
//         </li> */}

//           ) : (
//             <ul>
//           {/* <li className="nav-item">
//             <Link className="Link" to="/profile">
//               profile
//             </Link>
//           </li> */}
//           <li className="nav-item">
//             <Link className="Link" to="/logOut">
//               LogOut
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

export default Navigation;
